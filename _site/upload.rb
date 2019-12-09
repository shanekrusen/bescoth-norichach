file_list = Dir.glob("./_site/**/**")
file_list.each { |file|
   file.sub!( "./_site/", "/" )   
}

service_worker = File.open('./assets/js/service-worker.js')
service_worker = service_worker.readlines
serv_work_ver = service_worker[0][/\'v(.*?)\'\;/, 1].to_i
serv_work_ver += 1
new_serv_work_line = "const LATEST_CACHE_ID = 'v#{serv_work_ver}';\n"

File.open('./assets/js/service-worker.js', 'w') {}
new_serv_worker = File.new('./assets/js/service-worker.js', 'a')

new_serv_worker.write(new_serv_work_line + "\n")
new_serv_worker.write(
"self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(LATEST_CACHE_ID).then(function(cache) {
      return cache.addAll([
"
)

file_list.each { |file|
    new_serv_worker.write("         '" + file + "',\n")
}

new_serv_worker.write(
"      ]);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keyList) { 
      Promise.all(keyList.map(key => {
        if (key !== LATEST_CACHE_ID) {
          return caches.delete(key);
        }
      }))
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});"    
)

new_serv_worker.close
sleep 3

system("git add --all")
puts "Enter commit comment:"
comment = gets.chomp
system("git commit -am '#{comment}'")
system("git push origin master")

file_list = Dir.glob("./_site/**/**")
file_list.each { |file|
   file.sub!( "./_site/", "/" )   
}

system("git add --all")
comment = gets.chomp
system("git commit -am '#{comment}'")
system("git push origin master")
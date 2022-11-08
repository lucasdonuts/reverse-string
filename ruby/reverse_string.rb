def reverse_string(str)
  arr = str.split('')
  new_arr = []
  i = arr.length - 1

  while i >= 0
    new_arr << arr[i]
    i -= 1
  end
  
  new_arr.join('')
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
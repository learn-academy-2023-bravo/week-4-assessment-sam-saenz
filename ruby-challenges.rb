# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# Define a method call even_or_odd, that takes in a numeric as a parameter. Then, inside the code block check if the argument is a numeric, and if so, use an if statement to run the .even operator, returning even if true and odd if false.

def even_or_odd(num)
    if num.is_a? Numeric
        if num.even?
            "#{num} is even"
        else
            "#{num} is odd"
        end
    else
        'Bad input'
    end
end

reposts1 = 7
p even_or_odd(reposts1)
# Expected output: '7 is odd'
reposts2 = 42
p even_or_odd(reposts2)
# Expected output: '42 is even'
reposts3 = 221
p even_or_odd(reposts3)
# Expected output: '221 is odd'



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# Define a function removeVowels that takes in a string and uses .delete to remove all uppercase and lowercase vowels from the input.

def removeVowels(string)
    string.delete "aeiouAEIOU"
end

beatles_album1 = 'Rubber Soul'
p removeVowels(beatles_album1)
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
p removeVowels(beatles_album2)
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
p removeVowels(beatles_album3)
# Expected output: 'bby Rd'



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

# Define a function check_for_palindrome that takes in a string as an argument, then converts it to all lowercase using the .downcase function, checks if that is equal to the string after using the .reverse function, and returns the applicable string interpolated result.

def check_for_palindrome string
    if string.downcase == string.downcase.reverse
        p "#{string} is a palindrome"
    else
        p "#{string} is not a palindrome"
    end
end

palindrome_tester1 = 'Racecar'
check_for_palindrome(palindrome_tester1)
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
check_for_palindrome(palindrome_tester2)
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
check_for_palindrome(palindrome_tester3)
# Expected output: 'Rotator is a palindrome'

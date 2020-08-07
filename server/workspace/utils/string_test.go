package utils

import "testing"

func TestPalindrome(t *testing.T) {
	resultRight := IsPalindrome("racecar")
	resultWrong := IsPalindrome("hello")

	if !resultRight || resultWrong {
		t.Error("Palindrome func is incorrect")
	}
}

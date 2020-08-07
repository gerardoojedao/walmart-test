package utils

import (
	"regexp"
	"strings"
)

func IsPalindrome(value string) bool {
	if len(value) == 0 {
		return false
	}

	value = sanitize(value)

	for i := 0; i < len(value)/2; i++ {
		if value[i] != value[len(value)-i-1] {
			return false
		}
	}
	return true
}

func sanitize(value string) string {
	reg, _ := regexp.Compile("[^A-Za-z0-9]+")
	safe := reg.ReplaceAllString(value, "")
	return strings.ToLower(strings.Trim(safe, ""))
}
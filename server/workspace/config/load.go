package config

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"strings"

	"github.com/joho/godotenv"
)

var myEnvKeys map[string]string

func FetchValueByKey(key string) string {
	if len(myEnvKeys) == 0 {
		LoadKeys()
	}
	if myEnvKeys[key] == "" {
		return ""
	}
	return myEnvKeys[key]
}

func LoadKeys() {

	myEnvKeys = make(map[string]string)

	loadCurrentDirectory()
	loadInsensitive()
	loadSensitiveFromEnv()
}

func loadCurrentDirectory() {

	dir, err := os.Getwd()
	if err != nil {
		log.Fatal(err)
	}

	if dir == "/" {
		dir = ""
	}

	myEnvKeys["CUSTOM_WORKING_DIR"] = dir
}

func loadInsensitive() {

	envFilePath := myEnvKeys["CUSTOM_WORKING_DIR"] + "/keys/.env"

	isExist := doesFileExist(envFilePath)
	if !isExist {
		fmt.Println("not found keys/.env in " + myEnvKeys["CUSTOM_WORKING_DIR"])
	}
	if isExist {
		err := godotenv.Load(envFilePath)
		if err != nil {
			log.Fatal("Error loading keys/.env file")
		}
		fmt.Println("loaded keys/.env")

		myEnv, err := godotenv.Read(envFilePath)
		if err != nil {
			log.Fatal("Error loading keys/.env file")
		}

		for k, v := range myEnv {
			myEnvKeys[k] = v
		}
	}
}

func loadSensitiveFromEnv() {

	envFilePath := myEnvKeys["CUSTOM_WORKING_DIR"] + "/keys/.env"

	isExist := doesFileExist(envFilePath)
	if !isExist {
		fmt.Println("not found keys/.env in " + myEnvKeys["CUSTOM_WORKING_DIR"])
	}
	if isExist {
		err := godotenv.Load(envFilePath)
		if err != nil {
			log.Fatal("Error loading keys/.env file")
		}
		fmt.Println("loaded keys/.env")
	}

	//Get NAMES of environment variables
	envNamesFilePath := myEnvKeys["CUSTOM_WORKING_DIR"] + "/keys/env_names"
	isExistEnvNames := doesFileExist(envNamesFilePath)

	if isExistEnvNames {

		file, err := os.Open(envNamesFilePath)
		if err != nil {
			log.Fatal(err)
		}
		defer file.Close()

		scanner := bufio.NewScanner(file)
		for scanner.Scan() {
			envVarName := strings.TrimSpace(scanner.Text())
			envVarVal := os.Getenv(envVarName)

			if envVarVal != "" {
				myEnvKeys[envVarName] = envVarVal
			}
		}

		if err := scanner.Err(); err != nil {
			log.Fatal(err)
		}
	}
}

func doesFileExist(filePath string) bool {

	_, err := os.Stat(filePath)
	if err != nil {
		return false
	}

	if os.IsNotExist(err) {
		return false
	}

	return true
}
pipeline {
    agent any

    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Run Terminal Commands') {
            steps {
                script {
                    // Replace the following commands with your actual terminal commands
                    bat 'echo "Hello, Jenkins!"'
                    bat 'ls -la'
                    bat 'npm install'
                    bat 'npm run TestbackendFiles'
                }
            }
        }

        // Add more stages if needed
    }

    // Add post section or other pipeline sections if needed
}

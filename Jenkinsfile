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
                    sh 'echo "Hello, Jenkins!"'
                    sh 'ls -la'
                    sh 'npm install'
                    sh 'npm run TestbackendFiles'
                }
            }
        }

        // Add more stages if needed
    }

    // Add post section or other pipeline sections if needed
}

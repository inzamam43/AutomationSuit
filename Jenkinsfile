pipeline {
    agent any

    // environment {
    //     CHROME_PARALLELISM = 4
    //     FIREFOX_PARALLELISM = 2
    // }
 stages {
        stage('Build and Test Chrome') {
            steps {
                script {
                    sh 'npm install'
                    sh 'npm run TestbackendFiles'
                }
            }
        }

        // Add more stages if needed

    }
   
    //     stage('Build and Test Firefox') {
    //         steps {
    //             script {
    //                 sh 'npm install'
    //                 sh 'npm start &'
    //                 sh "npx cypress run --record --parallel --group firefox --browser firefox --spec cypress/e2e/app.cy.js,cypress/e2e/login.cy.js,cypress/e2e/about.cy.js"
    //             }
    //         }
    //     }
    // }

    // post {
    //     always {
    //         // Clean up or post-processing steps if needed
    //     }
    // }
}

pipeline{
    agent any
    parameters{
        string(name: 'SPEC', defaultValue: "cypress/e2e/**/**",description:"Enter the scripts path you want to execute")
        choice(name: 'BROWSER', choices: ['chrome','edge','firefox'], description: "Choose the browser where you want to execute your scripts")
    }

    option{
        ansiColor('xterm')
    }

    stages{
        stage('Build'){
            steps{
                echo "Building the application"
            }

        }
        stage('Testing'){
            steps{
                bat "npn i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Deploying'){
            echo "Deploy the application"
        }
    }
    post{
        always{
            publishHTML([allowMissing:false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports/', reportFiles: 'TestResults.html, coverage/index.html', reportTitles: 'Test Results, Coverage',reportName: 'Test Results Left side link'])
        }
    }
}

pipeline{
    agent any
    parameters{
        string(name: 'SPEC', defaultValue: "cypress/e2e/**/**",description:"Enter the scripts path you want to execute")
        choice(name: 'BROWSER', choices: ['chrome','edge','firefox'], description: "Choose the browser where you want to execute your scripts")
    }

    option{
        ansiColor('xterm')
    }

    tools {nodejs "node"}

    stages{
        stage('Staffbase E2E Test Suite'){
            parallel {
                stage('Slave Node1'){
                    agent {
                        label "remote_node1"
                    }
                    steps {
                        git url: 'https://github.com/morgenstern89/staffbase_e2e_test.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triggerAllTests-staffbase-dashboard'
                    }
                }
                 stage('Slave Node2'){
                    agent {
                        label "remote_node2"
                    }
                    steps {
                        git url: 'https://github.com/morgenstern89/staffbase_e2e_test.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triggerAllTests-staffbase-dashboard'
                    }
                }
            }
        }

}

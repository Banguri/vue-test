pipeline {
    agent any

    stages {
        stage('Cleaning previous images') {
            steps {
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    sh 'docker image rm -f basecamp:latest'
                    sh 'rm -f basecamp.tar'
                }
            }
        }
        stage('Building image') {
            steps {
                sh 'docker build -t basecamp:latest .'
                sh 'docker save -o basecamp.tar basecamp:latest'
            }
        }
        stage('Deploying') {
            steps {
                sshPublisher(
                    publishers: [sshPublisherDesc(
                        configName: 'ice4-DEV server',
                        transfers: [sshTransfer(
                            cleanRemote: false,
                            execCommand: 'pwd && cd jenkinsDrops/ && docker container rm -f basecamp && docker image rm -f basecamp:latest && docker load < basecamp.tar && docker run -p 8000:8000 --name basecamp -d basecamp:latest',
                            execTimeout: 120000,
                            remoteDirectory: 'jenkinsDrops',
                            patternSeparator: '[, ]+',
                            sourceFiles: 'basecamp.tar'
                        )],
                        usePromotionTimestamp: false,
                        useWorkspaceInPromotion: false,
                        verbose: false
                    )]
                )
            }
        }
    }
}

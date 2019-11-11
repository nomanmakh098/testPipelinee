pipeline {
    agent none
  
    tools {nodejs "node"}
    parameters {
        booleanParam(name: 'del_cache', defaultValue: false, description: 'Toggle this value to build with cache clearing.')
    }
    environment {
        REPO = 'https://github.com/nomanmakh098/testPipelinee.git'
        REPO_CRED = 'nomanmakh'
        //IOS_KEYCHAIN = 'Pipeline-db'
    }
    options {
        //ansiColor('xterm')
        timeout(time: 60, unit:'MINUTES')
        timestamps()
    }    
    stages {       
        stage('Parallel Stage test') {
            parallel {
                
                stage('iOS.') {
                    agent any

                    stages {
                        
                        stage ('Clearing cache.') {
                            when { expression { return params.del_cache } }
                            steps {
                                deleteDir()
                            }
                        }
                        
                        stage('iOS. Build') {
                        	
                            steps {
                              
                                // Delete keychain if it exist:
                                sh "rm -rf ./ios/Podfile.lock | true"
                                
                                //sh "/usr/bin/security delete-keychain ${IOS_KEYCHAIN} | true"
                                 //sh "npm install -g yarn"
                                //sh "npm config delete proxy"
                                //sh "npm config delete http-proxy"
                              	//sh "npm config delete https-proxy"
                              	//sh "npm config set https-proxy http://makhdoon:Poiuy123@11.2.4.134:8080"
                                sh "npm install"
                                //script {
                                    //sh "cp $Users/Shared/Jenkins/Home/workspace/IOS-Builds/ios"
                                  	//sh "fastlane gym"
                                    
                                //}
                            }
                        }
                        
                    }                   
                }
                
            }
        }
    }  
}
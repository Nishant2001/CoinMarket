pipeline 
{
  agent any
  tools 
   {
    nodejs "node"
    }
  stages 
  {
    stage('Prepare') {
      steps{
    
    bat 'npm install -g yarn'
    bat 'yarn install'
        bat 'yarn config set registry https://registry.npmjs.org'
      }
  }
    
    stage('Build') 
    {
      steps 
      {
        bat 'yarn'
      }
    }

    stage('Test') 
    {
      steps 
      {
        bat 'node src/tests/TestCoinApi.js'
      }
    }


     

   
}
}

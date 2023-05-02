pipeline 
{
  agent any
  tools 
   {
    nodejs "node"
    }
  stages 
  {
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
        bat 'npm test'
        bat 'node src/tests/TestCoinApi.js'
      }
    }


     

   
}
}

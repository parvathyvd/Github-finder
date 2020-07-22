//get the user serach input value

const getUserValue = document.querySelector('#users');

//init github

const github = new Github;

//init ui

const ui = new UI;

const getUserDetails = (e) =>{

    // clear the profile UI first

 
    const userText = e.target.value;
    // check if e.target is empty or not
    if(userText!= ''){

        // Fetch the profle and returns the promise 
        const userProfile = github.getProfile(userText);

        //Fetch userRespos

        
        //Process the promise and check for profile exist or not

        userProfile.then(data =>{
            console.log(data)
            if(data.profile.message === 'Not Found'){
             // show Alert
             ui.showAlert(`This user doesn't exist`, 'alert alert-danger');
            }
            else{

                ui.clearUI();

                //Add profile to the UI
                ui.addProfileUI(data.profile);

                ui.showRepos(data.repos);

            }
        })

        

    }
    else{
        //Show Alert
        ui.clearUI();
        ui.clearRepo();

    }

}

getUserValue.addEventListener('keyup', getUserDetails)
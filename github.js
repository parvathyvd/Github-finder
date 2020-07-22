class Github{
    constructor(){
        this.client_id ='47b889d930f0a550e1ee';
        this.secret_key = 'd6a1ba05432ed95512558c6a3202633c0c90136e';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
   async getProfile(user){
       //console.log(user);
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.secret_key}`)
        const profile = await profileResponse.json()
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repos = await repoResponse.json();
        return{
            profile,
            repos
        }        

    }

   
}




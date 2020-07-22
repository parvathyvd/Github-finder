class UI{
    constructor(){
        this.user_profile = document.querySelector('#profile');
        this.reposSection = document.querySelector('#repos');

    }

    addProfileUI(profile){
        console.log(`inside ui`,profile);

        const html =`<div class="col-sm-3">
        <img class="img-fluid" src="${profile.avatar_url}">
        <br />
        <a class="btn btn-lg btn-outline-success mt-2" href="${profile.html_url}" target="_blank">View Profile</a>
    </div>
    <div class="col-sm-9">
        <div class="badges">
        <span class="badge badge-primary">Public Repos: ${profile.public_repos}</span>
        <span class="badge badge-primary">Public Gists: ${profile.public_gists}</span>
        <span class="badge badge-primary">Followers: ${profile.followers}</span>
        <span class="badge badge-primary">Following: ${profile.following}</span>
        </div>
        <div class="other-details mt-5">
            <ul class="list-unstyled list-group">
                <li class="text-dark list-group-item">Company: ${profile.company}</li>
                <li class="text-dark list-group-item">Website/Blog: ${profile.blog}</li>
                <li class="text-dark list-group-item">Location: ${profile.location}</li>
                <li class="text-dark list-group-item">Member Since: ${profile.created_at}</li>
            </ul>
        </div>
    </div>
</div>`;
this.user_profile.insertAdjacentHTML('afterbegin', html);
    }

    showAlert(msg, className){
        const html = `<p class="${className}">${msg}</p>`;
        this.user_profile.insertAdjacentHTML('beforebegin', html);
        setTimeout(()=>{
            document.querySelector(`.alert`).remove();
        },2000)

    }

    clearUI(){
        this.user_profile.innerHTML = '';
    }

    showRepos(repos){
        //clear repos first
        this.clearRepo();
        console.log(`repos`, repos);
        let html = '';
        repos.forEach(repo => {
            html += `<div class="card card-body mb-2">
            <div class="row">
              <div class="col-md-6">
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
              </div>
              <div class="col-md-6">
              <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-success">Forks: ${repo.forms_count}</span>
              </div>
            </div>
          </div>`;
        });
      this.reposSection.insertAdjacentHTML('afterbegin',html)
    }
    clearRepo(){
        this.reposSection.innerHTML = '';
    }

}
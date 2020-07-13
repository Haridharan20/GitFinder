class GitHub{
    constructor(){
        this.client_id = '489db5339023f6fb7273';
        this.client_secret = '6c10fb164eb4b3bdfbdc330d8250a100d738619a';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    async getUser(user)
    {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id = ${this.client_id}&client_secret = ${this.client_secret}`);
        
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id = ${this.client_id}&client_secret = ${this.client_secret}`);
 
        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        return{
            profile,
            repos
        }
    }
}
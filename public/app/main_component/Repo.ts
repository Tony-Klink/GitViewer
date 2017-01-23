export class Repo {
    public id: number;
    public owner: any;
    public name: string;
    public full_name: string;
    public description: string;
    public 'private': boolean;
    public fork: boolean;
    public url: string;
    public html_url: string;

    constructor(
      id: any,
      owner: any, 
      name: any, 
      full_name: any, 
      desc: any,
      priv: any,
      fork: any,
      url: any,
      html: any) {
        this.id = id;
        this.owner = owner;
        this.name = name;
        this.full_name = full_name;
        this.description = desc;
        this.private = priv;
        this.fork = fork;
        this.url = url;
        this.html_url = html;
    }


}
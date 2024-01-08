import conf from "../conf/conf";
import {Client,Account,Id,Databases,Storage,Query} from "appwrite"


export class Service{
    client =new Client();
    databases;
    bucket;

    constructor()
    {
        this.client
          .setEndpoint(conf.appwriteurl)
          .setProject(conf.appwriteProjectId)
          this.databases=new Databases(this.account.client)
        this.bucket =new Storage(this.client)
    }

    async createPost({title,slug,content,featuredimage,status,userid})
    {
       try 
       {
          return await this.databases.createDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{
            title,
            content,
            featuredimage,
            status, 
            userid
          })
       } 
       catch (error) 
       {
         console.log("createPost error :: ",error);
       }
    }

    async deletePost(slug)
    {
       try 
       {
          await this.databases.deleteDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug)
          return true;
       } 
       catch (error) 
       {
         console.log("deletePost error :: ",error);
         return false;
       }
    }


    async updatePost(slug,{title,content,featuredimage,status})
    {
       try 
       {
          return await this.databases.updateDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{
            title,
            content,
            content,
            featuredimage,
            status, 
            userid
          })
       } 
       catch (error) 
       {
         console.log("updatePost error :: ",error);
       }
    }


    async getPost(slug)
    {
       try 
       {
          return await this.databases.getDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug)
       } 
       catch (error) 
       {
         console.log("getPost error :: ",error);
         return false;
       }
    }

    async getposts(queries=[Query.equal("status","active")])
    {
       try 
       {
          return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
           queries)
       } 
       catch (error) 
       {
         console.log("getPosts error :: ",error);
         return false;
       }
    }
  
    // file upload service

    async uploadFile(file)
    {
        try 
        {
           return await this.bucket.createFile(
             conf.appwriteBucketId,
             Id.unique(),
            file)
        } 
        catch (error) 
        {
          console.log("upload file error :: ",error);
          return false;
        }
    }

    async deleteFile(fileId)
    {
        try 
        {
            await this.bucket.deleteFile(
             conf.appwriteBucketId,
             fileId,)
             return true;
        } 
        catch (error) 
        {
          console.log("delete file error :: ",error);
          return false;
        }
    }

    getFilePreview(fileId)
    {
        try 
        {
           return  this.bucket.getFilePreview(
             conf.appwriteBucketId,
            fileId,)
        } 
        catch (error) 
        {
          console.log("upload file error :: ",error);
          return false;
        }
    }
   
}


const service=new Service()
export default service

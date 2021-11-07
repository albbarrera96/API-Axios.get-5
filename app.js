new Vue ({
    el:'#vue-app',

    data:{
      posts: []
    },

    methods:{

      getPosts (){
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then((response) => {
            this.posts = response.data;
            this.logPosts(response.data);
          });        
      },
/*****logPosts function calls the data property from the response we've got */
      logPosts(data){
        console.log(data)
      }
    },
})

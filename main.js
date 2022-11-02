const mongoose = require('mongoose');
async function run(){
        await mongoose.connect('mongodb://localhost:27017/mydb?authSource=mydb', {
            useNewUrlParser: true,
            useUnifiedTopology:true,
            "user": "dbuser",
            "pass": "dbuser"
        });

        const Blog = await mongoose.model('blogs', {title: String, content: String});

        for (var i = 1; i <= 10; i++){
                var blog = new Blog({title: "myblog" + i, content: "hello, mongoDB."});
                await blog.save();
                console.log(`Done${i}`);

        }
        process.exit(0);
}
run()
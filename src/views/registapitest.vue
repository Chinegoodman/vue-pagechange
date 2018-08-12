<template>
    <div @click="registffun">regist</div>
</template>

<script>
export default {
    methods:{
        registffun(){
            console.log(process.env.NODE_ENV)
            this.axios({
                method:'post',
                // url:'http://www.ooo0o.com/tp5/public/home/index/register',
                url:'/apihost/tp5/public/home/index/register',
                data:{
                    username:'afwe123',
                    email:'fawe@123.com',
                    passwd:'faewfeaw123',
                    rePasswd:'faewfeaw123',
                }
            }).then((msg)=>{
                console.log(msg)
            }).catch((error)=>{
                console.log(error)
            })
        }
    }
}
</script>

<style>

</style>

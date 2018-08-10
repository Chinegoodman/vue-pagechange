<template>
    <div>
        <p>
        apitest
        </p>
        <input type="file" :v-model="iptfilename" @change="getfile" accept="image/png,image/jpeg,image/gif">
        <img :src="iptfileshow" width="150" alt="">赛迪接口
        <br>
        <br>
        <br>=============================================================<br>
        <input type="file" ref="iptfile" @change="getfile1" accept="image/png,image/jpeg,image/gif">
        <img src="" width="150" alt="">自己阿里接口
        <br>
        <br>
        <br>=============================================================<br>
        <form action="http://172.16.21.122/file/upload?accessToken=SID_F609CCFDD8EBA469C1D78A9845202AE4" method="post" enctype="multipart/form-data">
            <p>form表单提交测试</p>
            <input type="file" name="file" value="选择文件或图片"/>
            <input id="submit_form" type="submit" value="保存"/>
        </form>
        <br>=============================================================<br>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                iptfilename:'',
                iptfileshow:'',
            }
        },
        methods:{
            getfile:function(e){
                let elefile = e.target.files[0]
                // ======================================此处插入文件大小判断===================================================================
                if (elefile.size > 1 * 1024 * 1024) {
                    alert('文件尺寸大于1M，请上传小文件')
                    e.target.value = '';
                    return;
                }
                // =====================================================================================================================
                let formFile = new FormData();
                formFile.append("file",elefile);
                // console.log(formFile.get('file').name)
                // console.log(formFile.get('file').size/1024/1024 +'MB')
                // console.log(formFile.get('file').type)
                this.axios({
                    url:'http://172.16.21.122/file/upload?accessToken=SID_F609CCFDD8EBA469C1D78A9845202AE4',
                    method:'post',
                    cache: false, //上传文件无需缓存
                    processData: false, //用于对data参数进行序列化处理 这里必须false
                    contentType: false, //必须
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    data:formFile
                }).then((msg)=>{
                    // console.log(msg)
                    // console.log(msg.data.data.file)
                    // let dataurl = msg.data.file;
                    let imgData = {
                        name:formFile.get('file').name,
                        sizeB:formFile.get('file').size,
                        type:formFile.get('file').type,
                        url:msg.data.data.file,
                        sizeKB:formFile.get('file').size/1024,
                        sizeMB:formFile.get('file').size/1024/1024,
                        sizeGB:formFile.get('file').size/1024/1024/1024,
                    }
                    this.iptfileshow=msg.data.data.file;
                    console.log(imgData)
                }).catch((error)=>{
                    console.log(error)
                })
            },
            
            getfile1:function(e){
                let elefile = e.target.files[0]
                // ======================================此处插入文件大小判断===================================================================
                if (elefile.size > 5 * 1024 * 1024) {
                    alert('文件尺寸大于5M，请上传小文件')
                    e.target.value = '';
                    return;
                }
                // =====================================================================================================================
                let formFile = new FormData();
                formFile.append("file",elefile);

                this.axios({
                    url:'http://www.ooo0o.com/tp5/public/home/index/qiniuUpload',
                    method:'post',
                    cache: false, //上传文件无需缓存
                    processData: false, //用于对data参数进行序列化处理 这里必须false
                    contentType: false, //必须
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    data:formFile
                }).then((msg)=>{
                    console.log(msg);

                }).catch((error)=>{
                    console.log(error)
                })
            }
        }
    }
</script>
<style>

</style>

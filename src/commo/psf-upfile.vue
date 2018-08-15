<template>
    <div class="psf-upfile-box">
        <label :for="'psf-filelabel'+fileIdName">
            <p>{{labetext}}</p>
            <!-- input默认隐藏，让label充满整个div区域来接收点击事件获取焦点 -->
            <input type="file" :id="'psf-filelabel'+fileIdName" :accept="filetype" @change="filechange">
        </label>
    </div>
</template>

<script>
export default {
    props:[
        // filetype文件类型：对输入文件格式做出限制输出时可以做简单区分。   ===父级必须给必须的参数
        // fileIdName文件的ID：用于绑定input方便点击区域获取焦点。         ===父级必须给必须的参数
        // upfileurl文件上传服务器端接口地址                              ===父级必须给必须的参数
        // labetext文件上传label地区显示文本                             ===父级必须给必须的参数
        // upfilesize文件上传大小即文件的最大限制尺寸  单位 "Mb"                   ===父级必须给必须的参数
        "filetype","fileIdName","upfileurl","labetext","upfilesize"
    ],
    data(){
        return{
            
        }
    },
    methods:{
        filechange:function(e){
            let ele = e.target.files[0];
            // ======================================此处插入文件大小判断===================================================================
            if (ele.size > this.upfilesize * 1024 * 1024) {
                alert('文件尺寸大于'+this.upfilesize+'M，请上传小文件')
                e.target.value = '';
                return;
            }
            // =====================================================================================================================
            
            let formFile = new FormData();
            let _this=this;
            formFile.append('file',ele);
            this.axios({
                url:this.upfileurl,
                method:'post',
                cache: false, //上传文件无需缓存
                processData: false, //用于对data参数进行序列化处理 这里必须false
                contentType: false, //必须
                // headers: {'Content-Type': 'application/x-www-form-urlencoded'},   
                data:formFile
            })
            .then(function(data){
                if(data.data.code.retnCode=="AAAAAAA"){
                    // console.log('上传成功')
                    // let imgData={
                    //     name:formFile.get('file').name,
                    //     sizeB:formFile.get('file').size,
                    //     type:formFile.get('file').type,
                    //     url:data.data.data.file,
                    //     sizeKB:formFile.get('file').size/1024,
                    //     sizeMB:formFile.get('file').size/1024/1024,
                    //     sizeGB:formFile.get('file').size/1024/1024/1024,
                    // };

                    let psfouttofather = {
                        fileIdName : _this.fileIdName,
                        fileData:{
                            url:data.data.data.file,
                            name : formFile.get('file').name,
                            type : formFile.get('file').type,
                            sizeB : formFile.get('file').size,
                            sizeKB : formFile.get('file').size/1024,
                            sizeMB : formFile.get('file').size/1024/1024,
                            sizeGB : formFile.get('file').size/1024/1024/1024
                        }
                    }
                    _this.$emit("getchilddata",psfouttofather)
                }else if(data.data.message=='上传成功！'){
                    let psfouttofather = {
                        fileIdName : _this.fileIdName,
                        fileData:{
                            url:data.data.data.file,
                            name : formFile.get('file').name,
                            type : formFile.get('file').type,
                            sizeB : formFile.get('file').size,
                            sizeKB : formFile.get('file').size/1024,
                            sizeMB : formFile.get('file').size/1024/1024,
                            sizeGB : formFile.get('file').size/1024/1024/1024
                        }
                    }
                    _this.$emit("getchilddata",psfouttofather)
                }
            })
            .catch(function(error){
                console.log(error)
                alert('上传失败')
            })
        }
    }
}
</script>

<style scoped>
    .psf-upfile-box{
        background:#ccc;
        display: inline-block;
        width: 200px;
        height: 30px;
    }
    .psf-upfile-box>label{
        float: left;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        position: relative;
    }
    .psf-upfile-box>label>input[type="file"]{
        display: none;
        height: 0;
        overflow: hidden;
        opacity: 0;
    }
    .psf-upfile-box>label>p{
        position: absolute;
        padding: 0;
        margin: 0;
        width: 80%;
        min-width: 140px;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        font-size: 14px;
        color: #000
    }
</style>

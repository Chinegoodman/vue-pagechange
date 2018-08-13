<template>
  
  <div class="about">
    <h1>This is an about page</h1>
    <psf-upfile class="zidingyiclassname" @getchilddata="saveupfiledata" :upfilesize="upfileresetdata.upfilesize" :labetext="labetext" :filetype="upfileresetdata.filetype" :fileIdName="upfileresetdata.fileIdName" :upfileurl="upfileresetdata.upfileurl"></psf-upfile>
  </div>
</template>

<script>
import psfUpfile from'./../commo/psf-upfile'
export default {
  components:{
    psfUpfile
  },
  data(){
    return{
      upfileresetdata:{
        // 可能的6种文件类型
        // image/png,image/jpeg,image/gif
        // text/html
        // application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
        // application/vnd.openxmlformats-officedocument.wordprocessingml.document
        // text/plain 比如txt文档
        // application/x-zip-compressed 比如.zip压缩文件
        filetype:'image/png,image/jpeg,image/gif',
        fileIdName:'fileinputWEIYIDEIdName',
        upfileurl:'http://172.16.21.122/file/upload?accessToken=SID_F609CCFDD8EBA469C1D78A9845202AE4',
        upfilesize:1,
      },
      labetext:'请选择要上传的文件',
    }
  },
  methods:{
    saveupfiledata(fileDataObj){
      console.log('父级获取到了')
      console.log(fileDataObj)
      // console.log(fileDataObj.fileIdName)
      this.labetext=fileDataObj.fileData.name
    }
  }
}
</script>

<style scoped>
  .psf-upfile-box{
    width: 800px;
    height: 150px;
    background: red;
  }
  .zidingyiclassname{
    width: 300px;
    height: 350px;
    background: #0ff;
  }
</style>

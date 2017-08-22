this.on("addedfile", function(file) {
   /* Valid only in the dropzone . If a repetitive document shows ALERT and the previous item will disappear.(Sorry my English). */
   if (this.files.length) {
     var i, len, pre;
     for (i = 0, len = this.files.length; i < len - 1; i++) {
       if (this.files[i].name == file.name && this.files[i].size == file.size && this.files[i].lastModifiedDate.toString() == file.lastModifiedDate.toString()) {
         alert("Doc: " + file.name + " is already registered.")
         return (pre = file.previewElement) != null ? pre.parentNode.removeChild(file.previewElement) : void 0;
       }
     }
   }
 });

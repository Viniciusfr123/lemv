// <template>
//     <div>
//       <label class="block">
//       <span class="text-lg font-medium text-gray-600">{{ label }}</span>
//         <div>
//         <input ref="file" v-on:change="handleFileUpload()"  type="file">
//         </div>
//       </label>
//     </div>
// </template>
<script>

// import { ref } from 'vue'
// import services from '../../services'

// export default {
//   props: ['label', 'context'],

//   setup (props) {
//     const file = ref(null)

//     async function handleFileUpload () {
//       console.log()
//       const { data, errors } = await services.file.upload(file.value.files)
//       if (!errors) {
//         props.context.$emit('uploadImg', data)
//         console.log(data)
//       } else {
//         console.log(errors)
//       }
//     }

//     return {
//       handleFileUpload,
//       file
//     }
//   }
// }

// </script>

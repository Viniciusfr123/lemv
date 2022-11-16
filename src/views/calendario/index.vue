<template>

  <div class="flex flex-col items-center w-full">
    <h1 class="text-4xl font-black text-black">Calêndario</h1>
      <div class="py-8">
        <iframe v-if="getWidth() > 1000" src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=America%2FSao_Paulo&mode=WEEK&title=Agenda%20Lem-v&showTitle=0&showNav=1&showDate=0&showTabs=1&showCalendars=0&showTz=0&src=dmluaWNpdXNyb2NoYTI4QGdtYWlsLmNvbQ&src=Y2xhc3Nyb29tMTEzNjA3MTA5NTA5MjA2NTQzOTU5QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZmFtaWx5MTUzNTkyMDAxNDgzMDI1OTk5OTNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23039BE5&color=%23c26401&color=%2333B679&color=%237986CB" style="border-width:0" width=1000 height="600" frameborder="0" scrolling="no"></iframe>
        <iframe v-else src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=America%2FSao_Paulo&mode=WEEK&title=Agenda%20Lem-v&showTitle=0&showNav=1&showDate=0&showTabs=1&showCalendars=0&showTz=0&src=dmluaWNpdXNyb2NoYTI4QGdtYWlsLmNvbQ&src=Y2xhc3Nyb29tMTEzNjA3MTA5NTA5MjA2NTQzOTU5QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZmFtaWx5MTUzNTkyMDAxNDgzMDI1OTk5OTNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23039BE5&color=%23c26401&color=%2333B679&color=%237986CB" style="border-width:0" width=400 height="600" frameborder="0" scrolling="yes"></iframe>
      </div>
  </div>

</template>

<script>
import 'vue-cal/dist/vuecal.css'

export default {
  data () {
    function getWidth () {
      return window.screen.width
    }

    return {
      getWidth
    }
  }

}
</script>

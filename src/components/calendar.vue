<template>
   <div class="calendar">
	   <full-calendar :events="fcEvents" locale="ru" firstDay="1" @dayClick ="eventClick"></full-calendar>
   </div>
</template>

<script>

	import fullCalendar from 'vue-fullcalendar'

	let demoEvents = [
		{
			title     : 'event1',
			start     : '2018-02-01',
			cssClass  : 'family',
			YOUR_DATA : {}
		},
		{
			title     : 'event2',
			start     : '2018-02-01',
			end       : '2018-02-04',
			cssClass  : ['family', 'career'],
			YOUR_DATA : {}
		}
	];
	
	export default {
		name: 'calendar',
		components: {
			'full-calendar': fullCalendar
		},
		data () {
			return {
				fcEvents : demoEvents
			}
		},
		methods: {
			eventClick(day, jsEvent) {
				console.log(day);
			}
		}
	}
</script>

<style>    

</style>

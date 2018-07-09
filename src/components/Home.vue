<template>
    <div id="home">
        <h1>Home</h1>
         <v-carousel
            delimiter-icon="stop"
            prev-icon="mdi-arrow-left"
            next-icon="mdi-arrow-right"
        >
            <v-carousel-item
            v-for="(item,i) in carouselItems"
            :key="i"
            :src="item.src"
            ></v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
export default {
  data () {
    return {
      carouselItems: [
				{ src: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/17264609_10104183293348658_8188884998757038652_n.jpg?_nc_cat=0&oh=099b6c8489682417304e82a3fee71105&oe=5B9F95DF', title: '', caption: ''},
				{ src: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/20882917_10212886101482790_1000735490943406290_n.jpg?_nc_cat=0&oh=9194ba483e85ce01855d95e4e2bbfeb5&oe=5BD275E9', title: '', caption: ''},
				{ src: 'https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/22338834_10100711858853068_3770711927232111823_o.jpg?_nc_cat=0&oh=8b8c77c8c2def4c7d497cd07a2b3a763&oe=5BD9075A', title: '', caption: ''},
				{ src: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/21617510_10213053257541587_3729286377657519650_n.jpg?_nc_cat=0&oh=3a0a2f0dca656aae15ea3186b0493dfe&oe=5BA67C97', title: '', caption: ''},
      ]
    }
  },
  name: 'Home'
}
</script>

<template>
    <div>
        <h3 class="text-center">Edit Book</h3>
        <form-component :edit="true" :initData="book" v-on:getData="initDataAndEdit"></form-component>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                book: {}
            }
        },
        created() {
            this.axios
                .get(`/api/book/edit/${this.$route.params.id}`)
                .then((response) => {
                    this.book = response.data;
                    // console.log(response.data);
                });
        },
        methods: {
            updateBook() {
                this.axios
                    .post(`/api/book/update/${this.$route.params.id}`, this.book)
                    .then((response) => {
                        this.$router.push({name: 'home'});
                    });
            },
            initDataAndEdit(book){
                this.book = book;
                this.updateBook();
            }
        },
    }
</script>

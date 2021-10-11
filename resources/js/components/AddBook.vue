<template>
    <div>
        <h3 class="text-center">Add Book</h3>
        <form-component :initData="book" v-on:getData="initDataAndSubmit">

        </form-component>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                book: {}
            }
        },
        methods: {
            addBook() {

                this.axios
                    .post('/api/book/add', this.book)
                    .then(response => (
                        this.$router.push({name: 'home'})
                        // console.log(response.data)
                    ))
                    .catch(error => console.log(error))
                    .finally(() => this.loading = false)
            },
            initDataAndSubmit(book){
                this.book = book;
                this.addBook();
            }
        }
    }
</script>

<template>
<div>
    <div class="row">
        <div class="col-md-6">
            <form @submit.prevent="$emit('getData',initData)">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="initData.name">
                </div>
                <div class="form-group">
                    <label>Author</label>
                    <input type="text" class="form-control" v-model="initData.author">
                </div>
                <button type="submit" class="btn btn-primary">Add Book</button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "form",
    props:['initData'],
}
</script>

<style scoped>

</style>

<template>
<div>
    {{edit === 0}}
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
                <button type="submit" class="btn btn-primary">{{ !edit ? "Add Book" : "Edit " + initData.name }}</button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "form",
    props:['initData','edit'],
}
</script>

<style scoped>

</style>

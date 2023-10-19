<template>
    <base-card>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="title">Title</label>
                <input type="text" id="title" name="title" ref="titleInput">
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea id="description" name="description" rows="3" ref="descInput"></textarea>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input type="url" id="link" name="link" ref="linkInput">
            </div>
            <div>
                <base-button type="submit">Add Resource</base-button>
            </div>
        </form>
        <teleport to="body">
            <error-alert v-if="inputIsInvalid">
                <h2>Input is invalid!</h2>
                <p>Please fill all input fields.</p>
                <button @click="confirmError">Ok</button>
            </error-alert>
        </teleport>
    </base-card>
</template>

<script>
import ErrorAlert from "@/components/UI/ErrorAlert.vue";

export default {
    components: {ErrorAlert},
    inject: ['addResource'],
    data() {
        return {
            inputIsInvalid: false
        }
    },
    methods: {
        submitData() {
            const enteredTitle = this.$refs.titleInput.value;
            const enteredDescription = this.$refs.descInput.value;
            const enteredUrl = this.$refs.linkInput.value;

            if (!enteredTitle || !enteredDescription || !enteredUrl) {
                this.inputIsInvalid = true;
            } else {
                this.addResource(enteredTitle, enteredDescription, enteredUrl);
            }
        },
        confirmError() {
            this.inputIsInvalid = false;
        }

    }
}
</script>

<style scoped>
label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
}

.form-control {
    margin: 1rem 0;
}
</style>
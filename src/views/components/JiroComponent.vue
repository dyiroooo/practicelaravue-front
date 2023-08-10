<template>
    <v-container>
        <v-row no-gutters>
            <v-col class="grey lighten-5">
                <v-card class="pa-2" outlined tile>
                    <v-card-title>
                        Input Fields
                    </v-card-title>
                    <v-card-text>
                        <v-text-field outlined dense label="Name" v-model="form.name">

                        </v-text-field>
                        <v-text-field outlined dense label="Contact" v-model="form.contact">

                        </v-text-field>
                        <v-text-field outlined dense label="Address" v-model="form.address">

                        </v-text-field>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="btnSubmitFields" small>Submit</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col class="grey lighten-5">
                <v-card class="pa-2" outlined tile>

                </v-card>
            </v-col>
            <v-col class="grey lighten-5">
                <v-card class="pa-2" outlined tile>

                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn color="error">Take Me to Kenneth Component</v-btn>
            </v-col>
            <v-col>
                <v-btn color="warning">Take Me to Hersvin Component</v-btn>
            </v-col>
            <v-col>
                <v-btn @click="alertSomething()" color="primary">Jiro's Component</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
    data() {
        return {
            form: {
                name: null,
                contact: null,
                address: null
            }
        }
    },
    methods: {
        btnSubmitFields() {
            alert("Dapat Mag Submit To");
        },

        alertSomething() {
            alert("Component ni Jiro To");
        }
    }
}
</script>
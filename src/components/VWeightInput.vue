<template>
    <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="280" :nudge-width="280" max-width="280px" > <!-- :return-value.sync="inputValue" -->
        <template v-slot:activator="{ on, attrs }">
            <v-text-field ref="weightInput" :error="isError" v-on="on" v-bind="attrs" type="number" step="0.001" :value="parseFloat(value).toFixed(3)" :outlined="outlined" :solo="solo" :label="label" :placeholder="placeholder" hide-details :readonly="readonly" :disabled="disabled" :dense="dense" :loading="loading" :suffix="suffix ? unit : false" :style="style">

            </v-text-field>
        </template>
        <v-card class="weight-panel py-0 px-3">
            <!-- <v-card-title></v-card-title> -->
            <v-card-text class="pb-0 px-1">
                
                <v-row class="mx-0">
                    <v-col cols="12" class="mb-3" :class="{'rtl-dir': rtl}">
                        <!-- <v-text-field readonly outlined hide-details class="weight-number strong-text--text" :value="parseFloat(inputValue).toFixed(3)"></v-text-field> -->
                        <div class="weight-number w-100">
                            <div class="d-flex align-center">
                                <div class="me-2">
                                    <v-btn icon color="error" @click="backspace">
                                        <v-icon size="20">mdi-backspace-outline</v-icon>
                                    </v-btn>
                                </div>
                                <h2 class="ltr-dir strong-text--text">
                                    <span>{{inputValue}}</span>
                                    <span class="placeholder muted--text">{{completeWeightPlaceholder}}</span>
                                </h2>
                            </div>
                            <span class="unit medium-text muted--text ms-3">{{unit}}</span>
                        </div>
                    </v-col>
                    <v-col cols="12">
                        <v-row class="mx-0 align-center">
                            <v-col cols="3">
                                <v-btn class="normal surface2" text block color="primary" @click="setFastValue(0.125)">{{eighthText}}</v-btn>
                            </v-col>
                            <v-col cols="3">
                                <v-btn class="normal surface2" text block color="primary" @click="setFastValue(0.25)">{{quarterText}}</v-btn>
                            </v-col>
                            <v-col cols="3">
                                <v-btn class="normal surface2" text block color="primary" @click="setFastValue(0.5)">{{halfText}}</v-btn>
                            </v-col>
                            <v-col cols="3">
                                <v-btn class="normal" depressed block :color="plusQuarterColor" @click="increaseBy(0.25)">+0.25</v-btn>
                            </v-col>
                        </v-row>
                        <v-divider class="my-2" />
                        <v-row class="mx-0 ltr-dir align-center">
                            <v-col v-for="i in 9" :key="'key-' + i" cols="4">
                                <v-btn text class="surface2" block color="strong-text" @click="numClick(i)">{{i}}</v-btn>
                            </v-col>
                            <v-col cols="4">
                                <v-btn depressed dark block color="error" @click="inputValue = ''">
                                    <v-icon size="22">mdi-restart</v-icon>
                                </v-btn>
                            </v-col>
                            <v-col cols="4">
                                <v-btn text class="surface2" block color="strong-text" @click="numClick(0)">0</v-btn>
                            </v-col>
                            <v-col cols="4">
                                <v-btn text class="surface2" block color="strong-text" @click="addPointToValue">.</v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                
            </v-card-text>
            <v-card-actions>
                <v-spacer />
                <v-btn large color="muted" text @click="cancel">{{cancelText}}</v-btn>
                <v-btn large color="primary" :disabled="!inputComputedValue" text @click="saveValue">{{saveText}}</v-btn>
            </v-card-actions>
        </v-card>
    </v-menu>
</template>

<script>

export default {
    props: {
        value: {},
        placeholder: String,
        label: String,
        outlined: {type: Boolean, default: false},
        solo: {type: Boolean, default: false},
        disabled: {type: Boolean, default: false},
        dense: {type: Boolean, default: false},
        showSortcuts: {type: Boolean, default: true},
        readonly: {type: Boolean, default: true},
        loading: {type: Boolean, default: false},
        suffix: {type: Boolean, default: true},
        rtl: {type: Boolean, default: true},
        unit: {type: String, default: 'kg'},
        width: {default: 110},
        maxWidth: {default: 110},
        emptyError: {type: Boolean, default: false},

        saveText: {type: String, default: 'save'},
        cancelText: {type: String, default: 'cancel'},
        eighthText: {type: String, default: '1/8'},
        quarterText: {type: String, default: '1/4'},
        halfText: {type: String, default: '1/2'},
        plusQuarterColor: {type: String, default: 'secondary'}
    },
    data(){
        return {
            menu: false,
            inputValue: '',
        }
    },
    computed: {
        isError(){
            if (this.emptyError){
                if (!this.value){
                    return true;
                }
            }
            return false;
        },
        inputComputedValue(){
            let value = parseFloat(this.inputValue);
            return value ? value : 0;
        },
        style(){
            let maxWidth = this.maxWidth ? 'max-width: ' + this.maxWidth + 'px;' : '',
                width = this.width ? 'width: ' + this.width + 'px;' : '';
            return maxWidth + width;
        },
        completeWeightPlaceholder(){
            let value = this.inputValue, 
                afterPoint = value.toString().split('.')[1],
                zerosCount = !afterPoint ? 3 : (3-afterPoint.length > 0 ? 3-afterPoint.length : 0 );
            let result = '';
            if (value === '' || value === null){
                result += '0';
            }
            if (zerosCount){
                if (value.toString().split('.').length < 2){
                    result += '.';
                }
                for(let i=1; i <= zerosCount; i++){
                    result += '0';
                }
            }
            return result;
        },
    },
    methods: {
        increaseBy(increase){
            let current = this.inputComputedValue;
            let value = parseFloat(current) + increase;
            this.inputValue = value.toFixed(3);
        },
        setFastValue(value){
            this.inputValue = value.toFixed(3);
        },
        backspace(){
            if (this.inputValue !== ''){
                this.inputValue = this.inputValue.toString().slice(0, -1);
            }
        },
        numClick(i){
            let current = this.inputValue.toString(),
                beforePoint = current.split('.')[0],
                afterPoint = current.split('.')[1],
                pointExists = (current.slice(-1) === '.' || !!(afterPoint && afterPoint.length > 0));

            // reset if current is 0 or after point digits > 2 or before point digits > 3
            if (current === '0' || (afterPoint && afterPoint.length > 2) || (!pointExists && beforePoint && beforePoint.length > 3)){
                current = '';
            }
            this.inputValue = current + i.toString();
        },
        addPointToValue(){
            let value = this.inputValue;
            if (value){
                value = value.toString().split('.')[0] + '.'
            }else{
                value = '0.';
            }
            this.inputValue = value;
        },
        cancel(){
            this.syncValue();
            this.menu = false;
        },
        saveValue(){
            let value = this.inputComputedValue;
            if (value){
                value = value ? value : 0;
                if (value !== this.value){
                    this.$emit('input', value);
                    this.menu = false;
                }
            }
        },
        syncValue(){
            let value = this.value;
            if (value){
                this.inputValue = parseFloat(value.toFixed(3)).toString();
            }else{
                this.inputValue = '';
            }
        },
        showSelectMenu(){
            this.menu = true; 
            // this.$refs.weightInput.click();
        },
        setKeyboardListener(){
            window.addEventListener('keydown', e=>{
                if(this.menu){
                    this.keyboardHandler(e);
                }
            })
        },
        keyboardHandler(e){
            e.preventDefault();
            e.stopPropagation();

            if (e.key === '.' || e.which === 110 || e.keyCode === 110){
                this.addPointToValue();
            }else if (e.key === 'Backspace' || e.which === 8 || e.keyCode === 8){
                this.backspace();
            }else if (e.key === 'Escape' || e.which === 27 || e.keyCode === 27){
                this.cancel();
            }else if (e.key === 'Enter' || e.which === 13 || e.keyCode === 13){
                this.saveValue();
            }else if (!isNaN(e.key)){
                this.numClick(e.key);
            }
        },
    },
    watch :{
        value(value){
            if (this.inputValue !== value){
                this.syncValue();
            }
        },
    },
    mounted(){
        this.syncValue();
        this.setKeyboardListener();
    }
}
</script>

<style lang="scss" scoped>
    .weight-panel{
        
        .ltr-dir{
            direction: ltr!important;
            div{
                direction: ltr!important;
            }
        }
        .rtl-dir{
            direction: rtl!important;
            div{
                direction: rtl!important;
            }
        }
        .weight-number{
            max-width: 100%;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .unit{
                
            }
            .placeholder{
                opacity: 0.4;
            }
            h2{
                font-size: 1.8rem!important;
                font-weight: 600;
            }
            // font-family: digital!important;
            text-align: center;
            border: 1px solid;
            padding: 7px 16px;
            border-radius: 4px;
        }
        .col{
            padding: 4px!important;

            .v-btn{
                &:not(.normal){
                    font-size: 1.2rem!important;
                }
                font-weight: 600;
                max-width: 100%;
                &.normal{
                    font-size: 0.8rem!important;
                }
            }
        }
    }
</style>
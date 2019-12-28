<template>
  <b-modal id="become-modal" size="lg" hide-header hide-footer>
    <div>
      <h4 class="text-center my-3">ร่วมเป็นอาสาใส่ใจ</h4>
      <b-row align-h="center">
        <b-col cols="7">
          <b-form-group id="input-group-1" label="ชื่อจริง:" label-for="input-1">
            <b-form-input
              id="input-1"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="7">
          <b-form-group id="input-group-1" label="นามสกุล:" label-for="input-2">
            <b-form-input
              id="input-2"
              type="password"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="7">
          <b-form-group id="input-group-1" label="Email address:" label-for="input-3">
            <b-form-input id="input-3" type="email" required placeholder="อีเมล"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row align-h="center">
        <b-col cols="7">
          <p>ใบรับรองการทำงาน:</p>
          <b-form-file
            placeholder="ใบรับรองการทำงาน"
            drop-placeholder="Drop file here..."
          ></b-form-file>
          <div class="mb-2"></div>
        </b-col>
        <b-col cols="7">
          <b-form-group id="input-group-1" label="ชื่อบุคคลอ้างอิงการทำงาน :" label-for="input-4">
            <b-form-input id="input-4" type="text" required placeholder="สมชาย วายดับบิวซี"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="7">
          <b-form-group id="input-group-1" label="เบอร์โทรศัพท์:" label-for="input-5">
            <b-form-input id="input-5" type="text" required placeholder="081 234 56xx"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="7">
          <b-button variant="primary" block @click="hideModal">Register</b-button>
        </b-col>
      </b-row>
    </div>
  </b-modal>
</template>

<script>
export default {
    methods: {
        hideModal() {
        this.$root.$emit('bv::hide::modal', 'become-modal')
    }
    }
}
</script>
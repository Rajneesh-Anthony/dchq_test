(function(){this.module("Dchq",function(){return this.module("EventCustomerParticipant",function(){var e;return this.init=function(){return $("#event_customer_participant_id_, #kit_hire_select, #insurance_select, .additionals select, .transports select, #event_customer_participant_quantity").change(function(){return e()}),$("#event_customer_participant_event_customer_participant_kit_hire_attributes_free, #event_customer_participant_event_customer_participant_insurance_attributes_free").change(function(){return e()}),$("a#switch_to_group").click(function(e){return e.preventDefault(),$(this).closest(".row-fluid").hide(),$("a#switch_to_personal").closest(".row-fluid").show()}),$("a#switch_to_personal").click(function(e){return e.preventDefault(),$(this).closest(".row-fluid").hide(),$("a#switch_to_group").closest(".row-fluid").show()})},e=function(){var e;return e=$(".ecp_form"),$.post("/event_customer_participants/calculate_price",e.serialize().replace(/&_method=[a-z]+/,""))}})}),$(function(){return $("body.event-customer-participants").length?Dchq.EventCustomerParticipant.init():void 0})}).call(this);
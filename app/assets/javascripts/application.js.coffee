//= require general
//= require js-routes
//= require best_in_place
//= require bootstrap-select
//= require bootstrap-toggle-buttons
//= require_tree ../../../vendor/assets/javascripts/bootstrap/.
//= require jasny-bootstrap
//= require bootstrap-fileupload
//= require bootbox
//= require bootstrap-datepicker
//= require datetimepicker.min
//= require jquery.cookie
//= require_tree ../../../vendor/assets/javascripts/theme/.
//= require_tree ../../../vendor/assets/javascripts/tsp_printer/.
//= require_tree ../../../vendor/assets/javascripts/lib/.
//= require jquery_nested_form
//= require select2
//= require date
//= require flash_messages
//= require validation
//= require fullcalendar
//= require jquery-tmpl
//= require_tree ./templates
//= require jquery.easy-pie-chart
//= require_tree ./refactoring/.
//= require registartions
//= require mixpanel
//= require common
//= require_self
#//= require filterrific/filterrific-jquery

@module 'Dchq', ->
  @module 'Application', ->

    #_________________________________________________________________________________ DEV 
   

    $('body').on 'click', '.add_desc_btn', ->
      $('.dialog').dialog()
      return

    $('body').on 'click', '.add_desc_submit', ->
      new_desc = undefined
      new_desc = $(this).siblings('.new_event_desc').val()
      $.ajax
        type: 'POST'
        url: '/events/save_event_description'
        data: new_desc: new_desc
        dataType: 'json'
        success: (data) ->
          console.log data
          $('.desc_select').append $('<option>',
            value: data.id
            text: data.description)
          $('.dialog').dialog 'close'
          return
        error: (error) ->
          console.log error
          return
      return

    $('body').on 'change', '.desc_select', -> 
      desc_id = undefined
      full_desc = undefined
      desc_id = $(this).val()
      full_desc = $(this).find('option:selected').text()
      $(this).siblings('.event_desc').val full_desc
      $(this).siblings('.control-group.hidden').find('input[type=hidden]').val desc_id
      if desc_id != ''
        $(this).siblings('.update_desc_btn').removeAttr 'disabled'
        $(this).siblings('.update_desc_btn').addClass 'active'
      else
        $(this).siblings('.update_desc_btn').attr 'disabled', 'disabled'
        $(this).siblings('.update_desc_btn').removeClass 'active'
      return

    $('body').on 'click', '.update_desc_btn', ->
      select = undefined
      selected_desc_id = undefined
      selected_desc_text = undefined
      selected_desc_id = undefined
      selected_desc_text = undefined
      select = $(this).siblings('select')
      if $(this).hasClass('active')
        selected_desc_id = select.find('option:selected').val()
        selected_desc_text = $(this).siblings('.event_desc').val()
        if selected_desc_id != null or selected_desc_id != ''
          $.ajax
            type: 'POST'
            url: '/events/update_event_description'
            data:
              selected_desc_id: selected_desc_id
              selected_desc_text: selected_desc_text
            dataType: 'json'
            success: (data) ->
              console.log data
              select.find('option').each ->
                if $(this).val() == selected_desc_id
                  $(this).text selected_desc_text
                return
              return
            error: (error) ->
              console.log error
              return
          return
      return 

    $('.translation_missing').each ->
      $(this).removeClass 'translation_missing'
      return
    
    $('.col-md-12.date_strip:first').find('.date-container:eq(0)').addClass 'active'
    $('.col-sm-12.event_content:eq(0)').removeClass 'hidden'

    #__________________________________________________________________________________
    
    createDateAndTimePickers = ->
      $('.datepicker').datepicker
        format: I18n.t('date.formats.datepicker_date')
        autoclose: true
      $('.datetimepicker').datetimepicker('remove').datetimepicker
        format: I18n.t('time.formats.datepicker_default')

    init_all_day = ->
      if $('.all_day').length
        $('.all_day').each ->
          el = $(this)
          parent = el.parents('.row-fluid').find('.date')
          parent.datetimepicker('remove')
          parent.find('.datepicker').datepicker('remove')
          if el.is(':checked')
            parent.removeClass('datetimepicker')
            parent.find('input:text').addClass('datepicker')
          else
            parent.addClass('datetimepicker')
            parent.find('.datepicker').removeClass('datepicker')
        createDateAndTimePickers()

      $('.all_day').on 'change', ->
        parent = $(this).parents('.row-fluid').find('.date')
        parent.datetimepicker('remove')
        parent.find('.datepicker').datepicker('remove')
        parent.toggleClass('datetimepicker')
        parent.find('input:text').toggleClass('datepicker')
        val = parent.find('input:text').val()
        if val
          if $(this).is(':checked')
            val = Date.parseExact(val, 'yyyy-MM-dd HH:mm').toString('yyyy-MM-dd')
          else
            val = Date.parseExact(val, 'yyyy-MM-dd').toString('yyyy-MM-dd HH:mm')
          parent.find('input:text').val(val)
        $('.datepicker').datepicker('remove')
        createDateAndTimePickers()

    @init = ->
      init_all_day()

      $('form').on 'nested:fieldAdded', (event) ->
        # $(event.target).find(':input').enableClientSideValidations()
        $('.datepicker').find("input").removeClass("hasDatepicker").removeData("datepicker").unbind()
        createDateAndTimePickers()
        $('.selectpicker').selectpicker()
        $(".uniformjs").find("select, input, button, textarea").uniform() if $(".uniformjs").length
        init_all_day()

      $("form a.add_nested_fields").live "click", ->
        jscolor.init()  if $(".color").length > 0

      $('.best_in_place').best_in_place()

      createDateAndTimePickers()
      $('.date .starts_at.autoupdate').live 'change', ->
        if $(this).closest('.row-fluid').find('.all_day').is(':checked')
          new_time = $(this).val()
        else
          new_time = Date.parseExact($(@).val(), I18n.t('time.formats.datepicker_default_datejs')).addHours(3).toString(I18n.t('time.formats.datepicker_default_datejs'))
        $(@).closest('.row-fluid').find('.ends_at').val(new_time)

      $('.modal').on 'shown', ->
        $(@).find('form').enableClientSideValidations()

      search_autocomplete()

      options = {}
      if $('body.bookings').length
        options = { allowClear: true }

      $('.select2').select2(options)

    search_autocomplete = ->
      $("body .search-query").keyup (e) ->
        value = $(this).val()
        len = 15 #value.length,
        obj_val = data: value

        $("body .search .search_value").show()
        $.ajax
          type: "GET"
          dataType: "json"
          cache: false
          url: $(this).attr("data-path")
          data: obj_val
          success: (a) ->
            tmp = ""
            nr = a.length
            string = ""
            i = 0

            while i < nr
              tmp = a[i].name
              if a[i].type is "customer"
                link = "/customers/" + a[i].id
              else if a[i].type is "supplier"
                link = "/suppliers/" + a[i].id
              else if a[i].type is "user"
                link = "/staff_members/" + a[i].id
              else if a[i].type is "product"
                link = "/products/" + a[i].id
              else if a[i].type is "event"
                link = "/events/" + a[i].id
              else link = "/services/" + a[i].id  if a[i].type is "service"
              string += "<a href=\"" + link + "\"><b>" + tmp.substr(0, len) + "</b>" + tmp.substring(len) + "<span class=\"" + a[i].type + "\">" + a[i].type + "</span></a>"
              i++
            $("body .search .search_value").html string

          error: ->
            $("body .search .search_value").html "Server error. Please try again later"

        $(document).click (e) ->
          that = $(e.target)
          $("body .search .search_value").hide() unless that.parent().hasClass("search_value")

$ ->
  Dchq.Application.init()

$.fn.make_as_taggable = (attr_field_id) ->
  tag_list = $(this)
  tag_list.tagit
    initialTags: $(attr_field_id).val().split(/,\s?/)
    triggerKeys: ["enter", "comma", "tab"]
    tagsChanged: (tagValue, action, element) ->
      $(attr_field_id).val tag_list.tagit("tags").map((el, i) ->
        el.value
      ).join(", ")

@currency_formatted = (amount) ->
  i = parseFloat(amount)
  i = 0.00  if isNaN(i)
  minus = ""
  minus = "-"  if i < 0
  i = Math.abs(i)
  i = parseInt((i + .005) * 100)
  i = i / 100
  s = new String(i)
  s += ".00"  if s.indexOf(".") < 0
  s += "0"  if s.indexOf(".") is (s.length - 2)
  s = minus + s
  s

$.fn.dom_id = ->
  $(@).attr("id").replace /[^\d]*/, ""

# selects helpers, TODO: move to separate module like Utils

$.fn.selected_option = ->
  _this = @get(0)
  return null if _this.tagName != 'SELECT'
  for opt, i in _this.options
    if opt.selected
      return opt
  null

$.fn.select_option_by_value = (value, refresh = true)->
  _this = @get(0)
  return @ if _this.tagName != 'SELECT'
  for opt, i in _this.options
    if opt.value == value.toString()
      _this.selectedIndex = i
      @selectpicker('refresh') if refresh
      return @
  @

$.fn.fill_in_selector = (data) ->
  selector = $(@).find("p")
  selector.html ""
  $.each data, ->
    link = $("<a>").attr("href", "javascript:void(0)").attr("data-id", @id).css('margin', '4px').attr('class', 'btn').text(@name)
    selector.append(link)

  $(@).show()

$.fn.exists = ->
  $(@).length > 0

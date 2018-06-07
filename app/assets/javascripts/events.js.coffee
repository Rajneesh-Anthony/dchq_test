@module 'Dchq', ->
  @module 'Events', ->
    @init =->
        
        $(document).on 'click', '.scroller-right', ->
            view_type = $('.ampm_select').val()
            start_date = new Date($('#start_date').val())
            end_date = new Date($('#end_date').val())
            
            if view_type == 'weekly'
                start_date.setDate(start_date.getDate() + 7)
                end_date = start_date
                start_date = $.datepicker.formatDate( "yy/mm/dd", start_date );
                end_date.setDate(end_date.getDate() + 6)
                end_date = $.datepicker.formatDate( "yy/mm/dd", end_date );

            else
                start_date.setDate(start_date.getDate() + 28)
                end_date = start_date
                start_date = $.datepicker.formatDate( "yy/mm/dd", start_date );
                end_date.setDate(end_date.getDate() + 27)
                end_date = $.datepicker.formatDate( "yy/mm/dd", end_date );
            
            load_calendar(view_type,start_date,end_date)
            
        
        $(document).on 'click', '.scroller-left', ->		
            view_type = $('.ampm_select').val()
            start_date = new Date($('#start_date').val())
            end_date = new Date($('#end_date').val())
            
            if view_type == 'weekly'
                start_date.setDate(start_date.getDate() - 7)
                end_date = start_date
                start_date = $.datepicker.formatDate( "yy/mm/dd", start_date );
                end_date.setDate(end_date.getDate() + 6)
                end_date = $.datepicker.formatDate( "yy/mm/dd", end_date );

            else
                start_date.setDate(start_date.getDate() - 28)
                end_date = start_date
                start_date = $.datepicker.formatDate( "yy/mm/dd", start_date );
                end_date.setDate(end_date.getDate() + 27)
                end_date = $.datepicker.formatDate( "yy/mm/dd", end_date );
            load_calendar(view_type,start_date,end_date)
        
        #Calendar Loader    
        load_calendar = (view_type,start_date,end_date) ->
            $.ajax '/events/get_calendar_events',
                type: 'GET',
                dataType: 'html',
                data: {calendar_view_type: view_type,start_date: start_date,end_date: end_date} 
                success: (data) ->
                    $('.calendar_div').replaceWith(data)
                    $('.col-md-12.date_strip:first').find('.date-container:eq(0)').addClass 'active'
                    $('.col-sm-12.event_content:eq(0)').removeClass('hidden')
                    $( ".type_select" ).trigger( "change" );
                    

        $('.ampm_select').on 'change', ->            
            
            view_type = $('.ampm_select').val()
            start_date = new Date($('#start_date').val())
            end_date = new Date($('#end_date').val())
            if view_type == 'weekly'
                end_date = start_date
                start_date = $.datepicker.formatDate( "yy/mm/dd", start_date );
                end_date.setDate(end_date.getDate() + 6)
                end_date = $.datepicker.formatDate( "yy/mm/dd", end_date );

            else
                end_date = start_date
                start_date = $.datepicker.formatDate( "yy/mm/dd", start_date );
                end_date.setDate(end_date.getDate() + 27)
                end_date = $.datepicker.formatDate( "yy/mm/dd", end_date );
            
            load_calendar(view_type,start_date,end_date)
            
        

      
               

        
      		

# == Route Map
#
# Connecting to database specified by database.yml
# Creating scope :parent. Overwriting existing method CourseEvent.parent.
#                            apipie_apipie_checksum GET        /apipie/apipie_checksum(.:format)                                            apipie/apipies#apipie_checksum {:format=>"json"}
#                                     apipie_apipie GET        /apipie(/:version)(/:resource)(/:method)(.:format)                           apipie/apipies#index {:version=>/[^\/]+/, :resource=>/[^\/]+/, :method=>/[^\/]+/}
#                                              root            /                                                                            pages#index
#                                        admin_root            /admin(.:format)                                                             admin/dashboard#index
#         batch_action_admin_certification_agencies POST       /admin/certification_agencies/batch_action(.:format)                         admin/certification_agencies#batch_action
#                      admin_certification_agencies GET        /admin/certification_agencies(.:format)                                      admin/certification_agencies#index
#                                                   POST       /admin/certification_agencies(.:format)                                      admin/certification_agencies#create
#                    new_admin_certification_agency GET        /admin/certification_agencies/new(.:format)                                  admin/certification_agencies#new
#                   edit_admin_certification_agency GET        /admin/certification_agencies/:id/edit(.:format)                             admin/certification_agencies#edit
#                        admin_certification_agency GET        /admin/certification_agencies/:id(.:format)                                  admin/certification_agencies#show
#                                                   PUT        /admin/certification_agencies/:id(.:format)                                  admin/certification_agencies#update
#                                                   DELETE     /admin/certification_agencies/:id(.:format)                                  admin/certification_agencies#destroy
#                       batch_action_admin_products POST       /admin/products/batch_action(.:format)                                       admin/products#batch_action
#                                    admin_products GET        /admin/products(.:format)                                                    admin/products#index
#                                                   POST       /admin/products(.:format)                                                    admin/products#create
#                                 new_admin_product GET        /admin/products/new(.:format)                                                admin/products#new
#                                edit_admin_product GET        /admin/products/:id/edit(.:format)                                           admin/products#edit
#                                     admin_product GET        /admin/products/:id(.:format)                                                admin/products#show
#                                                   PUT        /admin/products/:id(.:format)                                                admin/products#update
#                                                   DELETE     /admin/products/:id(.:format)                                                admin/products#destroy
#                          batch_action_admin_sales POST       /admin/sales/batch_action(.:format)                                          admin/sales#batch_action
#                                       admin_sales GET        /admin/sales(.:format)                                                       admin/sales#index
#                                                   POST       /admin/sales(.:format)                                                       admin/sales#create
#                                    new_admin_sale GET        /admin/sales/new(.:format)                                                   admin/sales#new
#                                   edit_admin_sale GET        /admin/sales/:id/edit(.:format)                                              admin/sales#edit
#                                        admin_sale GET        /admin/sales/:id(.:format)                                                   admin/sales#show
#                                                   PUT        /admin/sales/:id(.:format)                                                   admin/sales#update
#                                                   DELETE     /admin/sales/:id(.:format)                                                   admin/sales#destroy
#           batch_action_admin_certification_levels POST       /admin/certification_levels/batch_action(.:format)                           admin/certification_levels#batch_action
#                        admin_certification_levels GET        /admin/certification_levels(.:format)                                        admin/certification_levels#index
#                                                   POST       /admin/certification_levels(.:format)                                        admin/certification_levels#create
#                     new_admin_certification_level GET        /admin/certification_levels/new(.:format)                                    admin/certification_levels#new
#                    edit_admin_certification_level GET        /admin/certification_levels/:id/edit(.:format)                               admin/certification_levels#edit
#                         admin_certification_level GET        /admin/certification_levels/:id(.:format)                                    admin/certification_levels#show
#                                                   PUT        /admin/certification_levels/:id(.:format)                                    admin/certification_levels#update
#                                                   DELETE     /admin/certification_levels/:id(.:format)                                    admin/certification_levels#destroy
#                         batch_action_admin_brands POST       /admin/brands/batch_action(.:format)                                         admin/brands#batch_action
#                                      admin_brands GET        /admin/brands(.:format)                                                      admin/brands#index
#                                                   POST       /admin/brands(.:format)                                                      admin/brands#create
#                                   new_admin_brand GET        /admin/brands/new(.:format)                                                  admin/brands#new
#                                  edit_admin_brand GET        /admin/brands/:id/edit(.:format)                                             admin/brands#edit
#                                       admin_brand GET        /admin/brands/:id(.:format)                                                  admin/brands#show
#                                                   PUT        /admin/brands/:id(.:format)                                                  admin/brands#update
#                                                   DELETE     /admin/brands/:id(.:format)                                                  admin/brands#destroy
#                    batch_action_admin_admin_users POST       /admin/admin_users/batch_action(.:format)                                    admin/admin_users#batch_action
#                                 admin_admin_users GET        /admin/admin_users(.:format)                                                 admin/admin_users#index
#                                                   POST       /admin/admin_users(.:format)                                                 admin/admin_users#create
#                              new_admin_admin_user GET        /admin/admin_users/new(.:format)                                             admin/admin_users#new
#                             edit_admin_admin_user GET        /admin/admin_users/:id/edit(.:format)                                        admin/admin_users#edit
#                                  admin_admin_user GET        /admin/admin_users/:id(.:format)                                             admin/admin_users#show
#                                                   PUT        /admin/admin_users/:id(.:format)                                             admin/admin_users#update
#                                                   DELETE     /admin/admin_users/:id(.:format)                                             admin/admin_users#destroy
#                    batch_action_admin_event_trips POST       /admin/event_trips/batch_action(.:format)                                    admin/event_trips#batch_action
#                                 admin_event_trips GET        /admin/event_trips(.:format)                                                 admin/event_trips#index
#                                                   POST       /admin/event_trips(.:format)                                                 admin/event_trips#create
#                              new_admin_event_trip GET        /admin/event_trips/new(.:format)                                             admin/event_trips#new
#                             edit_admin_event_trip GET        /admin/event_trips/:id/edit(.:format)                                        admin/event_trips#edit
#                                  admin_event_trip GET        /admin/event_trips/:id(.:format)                                             admin/event_trips#show
#                                                   PUT        /admin/event_trips/:id(.:format)                                             admin/event_trips#update
#                                                   DELETE     /admin/event_trips/:id(.:format)                                             admin/event_trips#destroy
#                      batch_action_admin_customers POST       /admin/customers/batch_action(.:format)                                      admin/customers#batch_action
#                                   admin_customers GET        /admin/customers(.:format)                                                   admin/customers#index
#                                                   POST       /admin/customers(.:format)                                                   admin/customers#create
#                                new_admin_customer GET        /admin/customers/new(.:format)                                               admin/customers#new
#                               edit_admin_customer GET        /admin/customers/:id/edit(.:format)                                          admin/customers#edit
#                                    admin_customer GET        /admin/customers/:id(.:format)                                               admin/customers#show
#                                                   PUT        /admin/customers/:id(.:format)                                               admin/customers#update
#                                                   DELETE     /admin/customers/:id(.:format)                                               admin/customers#destroy
#                    batch_action_admin_diver_types POST       /admin/diver_types/batch_action(.:format)                                    admin/diver_types#batch_action
#                                 admin_diver_types GET        /admin/diver_types(.:format)                                                 admin/diver_types#index
#                                                   POST       /admin/diver_types(.:format)                                                 admin/diver_types#create
#                              new_admin_diver_type GET        /admin/diver_types/new(.:format)                                             admin/diver_types#new
#                             edit_admin_diver_type GET        /admin/diver_types/:id/edit(.:format)                                        admin/diver_types#edit
#                                  admin_diver_type GET        /admin/diver_types/:id(.:format)                                             admin/diver_types#show
#                                                   PUT        /admin/diver_types/:id(.:format)                                             admin/diver_types#update
#                                                   DELETE     /admin/diver_types/:id(.:format)                                             admin/diver_types#destroy
#                     batch_action_admin_currencies POST       /admin/currencies/batch_action(.:format)                                     admin/currencies#batch_action
#                                  admin_currencies GET        /admin/currencies(.:format)                                                  admin/currencies#index
#                                                   POST       /admin/currencies(.:format)                                                  admin/currencies#create
#                                new_admin_currency GET        /admin/currencies/new(.:format)                                              admin/currencies#new
#                               edit_admin_currency GET        /admin/currencies/:id/edit(.:format)                                         admin/currencies#edit
#                                    admin_currency GET        /admin/currencies/:id(.:format)                                              admin/currencies#show
#                                                   PUT        /admin/currencies/:id(.:format)                                              admin/currencies#update
#                                                   DELETE     /admin/currencies/:id(.:format)                                              admin/currencies#destroy
#                         batch_action_admin_stores POST       /admin/stores/batch_action(.:format)                                         admin/stores#batch_action
#                                      admin_stores GET        /admin/stores(.:format)                                                      admin/stores#index
#                                                   POST       /admin/stores(.:format)                                                      admin/stores#create
#                                   new_admin_store GET        /admin/stores/new(.:format)                                                  admin/stores#new
#                                  edit_admin_store GET        /admin/stores/:id/edit(.:format)                                             admin/stores#edit
#                                       admin_store GET        /admin/stores/:id(.:format)                                                  admin/stores#show
#                                                   PUT        /admin/stores/:id(.:format)                                                  admin/stores#update
#                                                   DELETE     /admin/stores/:id(.:format)                                                  admin/stores#destroy
#     batch_action_admin_customer_experience_levels POST       /admin/customer_experience_levels/batch_action(.:format)                     admin/customer_experience_levels#batch_action
#                  admin_customer_experience_levels GET        /admin/customer_experience_levels(.:format)                                  admin/customer_experience_levels#index
#                                                   POST       /admin/customer_experience_levels(.:format)                                  admin/customer_experience_levels#create
#               new_admin_customer_experience_level GET        /admin/customer_experience_levels/new(.:format)                              admin/customer_experience_levels#new
#              edit_admin_customer_experience_level GET        /admin/customer_experience_levels/:id/edit(.:format)                         admin/customer_experience_levels#edit
#                   admin_customer_experience_level GET        /admin/customer_experience_levels/:id(.:format)                              admin/customer_experience_levels#show
#                                                   PUT        /admin/customer_experience_levels/:id(.:format)                              admin/customer_experience_levels#update
#                                                   DELETE     /admin/customer_experience_levels/:id(.:format)                              admin/customer_experience_levels#destroy
#                    batch_action_admin_event_types POST       /admin/event_types/batch_action(.:format)                                    admin/event_types#batch_action
#                                 admin_event_types GET        /admin/event_types(.:format)                                                 admin/event_types#index
#                                                   POST       /admin/event_types(.:format)                                                 admin/event_types#create
#                              new_admin_event_type GET        /admin/event_types/new(.:format)                                             admin/event_types#new
#                             edit_admin_event_type GET        /admin/event_types/:id/edit(.:format)                                        admin/event_types#edit
#                                  admin_event_type GET        /admin/event_types/:id(.:format)                                             admin/event_types#show
#                                                   PUT        /admin/event_types/:id(.:format)                                             admin/event_types#update
#                                                   DELETE     /admin/event_types/:id(.:format)                                             admin/event_types#destroy
#                      batch_action_admin_companies POST       /admin/companies/batch_action(.:format)                                      admin/companies#batch_action
#                                   admin_companies GET        /admin/companies(.:format)                                                   admin/companies#index
#                                edit_admin_company GET        /admin/companies/:id/edit(.:format)                                          admin/companies#edit
#                                     admin_company GET        /admin/companies/:id(.:format)                                               admin/companies#show
#                                                   PUT        /admin/companies/:id(.:format)                                               admin/companies#update
#                                                   DELETE     /admin/companies/:id(.:format)                                               admin/companies#destroy
#                     batch_action_admin_categories POST       /admin/categories/batch_action(.:format)                                     admin/categories#batch_action
#                                  admin_categories GET        /admin/categories(.:format)                                                  admin/categories#index
#                                                   POST       /admin/categories(.:format)                                                  admin/categories#create
#                                new_admin_category GET        /admin/categories/new(.:format)                                              admin/categories#new
#                               edit_admin_category GET        /admin/categories/:id/edit(.:format)                                         admin/categories#edit
#                                    admin_category GET        /admin/categories/:id(.:format)                                              admin/categories#show
#                                                   PUT        /admin/categories/:id(.:format)                                              admin/categories#update
#                                                   DELETE     /admin/categories/:id(.:format)                                              admin/categories#destroy
#               batch_action_admin_commission_rates POST       /admin/commission_rates/batch_action(.:format)                               admin/commission_rates#batch_action
#                            admin_commission_rates GET        /admin/commission_rates(.:format)                                            admin/commission_rates#index
#                                                   POST       /admin/commission_rates(.:format)                                            admin/commission_rates#create
#                         new_admin_commission_rate GET        /admin/commission_rates/new(.:format)                                        admin/commission_rates#new
#                        edit_admin_commission_rate GET        /admin/commission_rates/:id/edit(.:format)                                   admin/commission_rates#edit
#                             admin_commission_rate GET        /admin/commission_rates/:id(.:format)                                        admin/commission_rates#show
#                                                   PUT        /admin/commission_rates/:id(.:format)                                        admin/commission_rates#update
#                                                   DELETE     /admin/commission_rates/:id(.:format)                                        admin/commission_rates#destroy
#                                   admin_dashboard GET        /admin/dashboard(.:format)                                                   admin/dashboard#index
#                       batch_action_admin_comments POST       /admin/comments/batch_action(.:format)                                       admin/comments#batch_action
#                                    admin_comments GET        /admin/comments(.:format)                                                    admin/comments#index
#                                                   POST       /admin/comments(.:format)                                                    admin/comments#create
#                                     admin_comment GET        /admin/comments/:id(.:format)                                                admin/comments#show
#                            new_admin_user_session GET        /admin/login(.:format)                                                       active_admin/devise/sessions#new
#                                admin_user_session POST       /admin/login(.:format)                                                       active_admin/devise/sessions#create
#                        destroy_admin_user_session DELETE|GET /admin/logout(.:format)                                                      active_admin/devise/sessions#destroy
#                               admin_user_password POST       /admin/password(.:format)                                                    active_admin/devise/passwords#create
#                           new_admin_user_password GET        /admin/password/new(.:format)                                                active_admin/devise/passwords#new
#                          edit_admin_user_password GET        /admin/password/edit(.:format)                                               active_admin/devise/passwords#edit
#                                                   PUT        /admin/password(.:format)                                                    active_admin/devise/passwords#update
#                                        save_event POST       /events/save_event_description(.:format)                                     events#save_event_description
#                                become_admin_index GET        /admin/become(.:format)                                                      admin#become
#                                  new_user_session GET        /users/sign_in(.:format)                                                     sessions#new
#                                      user_session POST       /users/sign_in(.:format)                                                     sessions#create
#                              destroy_user_session DELETE     /users/sign_out(.:format)                                                    sessions#destroy
#                                     user_password POST       /users/password(.:format)                                                    passwords#create
#                                 new_user_password GET        /users/password/new(.:format)                                                passwords#new
#                                edit_user_password GET        /users/password/edit(.:format)                                               passwords#edit
#                                                   PUT        /users/password(.:format)                                                    passwords#update
#                          cancel_user_registration GET        /users/cancel(.:format)                                                      registrations#cancel
#                                 user_registration POST       /users(.:format)                                                             registrations#create
#                             new_user_registration GET        /users/sign_up(.:format)                                                     registrations#new
#                            edit_user_registration GET        /users/edit(.:format)                                                        registrations#edit
#                                                   PUT        /users(.:format)                                                             registrations#update
#                                                   DELETE     /users(.:format)                                                             registrations#destroy
#                                          sign_out GET        /sign_out(.:format)                                                          sessions#destroy
#                                 set_current_store GET        /stores/:id/set_current(.:format)                                            stores#set_current
#                                      close_stores GET        /stores/close(.:format)                                                      stores#close
#                               cash_put_out_stores POST       /stores/cash_put_out(.:format)                                               stores#cash_put_out
#                                     reopen_stores GET        /stores/reopen(.:format)                                                     stores#reopen
#                                             store PUT        /stores/:id(.:format)                                                        stores#update
#                                customer_incidents POST       /customers/:customer_id/incidents(.:format)                                  incidents#create
#                                 customer_incident PUT        /customers/:customer_id/incidents/:id(.:format)                              incidents#update
#                                                   DELETE     /customers/:customer_id/incidents/:id(.:format)                              incidents#destroy
#                                    customer_notes POST       /customers/:customer_id/notes(.:format)                                      notes#create
#                     sync_with_mailchimp_customers GET        /customers/sync_with_mailchimp(.:format)                                     customers#sync_with_mailchimp
#                                  export_customers POST       /customers/export(.:format)                                                  customers#export
#                           export_to_qif_customers POST       /customers/export_to_qif(.:format)                                           customers#export_to_qif
#                             mobile_menu_customers GET        /customers/mobile_menu(.:format)                                             customers#mobile_menu
#                                  search_customers POST       /customers/search(.:format)                                                  customers#search
#   update_certification_level_membership_customers POST       /customers/update_certification_level_membership(.:format)                   customers#update_certification_level_membership
#                       check_certificate_customers POST       /customers/check_certificate(.:format)                                       customers#check_certificate
#                          get_credit_note_customer GET        /customers/:id/get_credit_note(.:format)                                     customers#get_credit_note
#                             add_to_event_customer POST       /customers/:id/add_to_event(.:format)                                        customers#add_to_event
#               check_certification_levels_customer GET        /customers/:id/check_certification_levels(.:format)                          customers#check_certification_levels
#                       get_discount_level_customer GET        /customers/:id/get_discount_level(.:format)                                  customers#get_discount_level
#                  recalculate_event_price_customer GET        /customers/:id/recalculate_event_price(.:format)                             customers#recalculate_event_price
#                               get_events_customer POST       /customers/:id/get_events(.:format)                                          customers#get_events
#                               load_sales_customer POST       /customers/:id/load_sales(.:format)                                          customers#load_sales
#                                 load_ecp_customer POST       /customers/:id/load_ecp(.:format)                                            customers#load_ecp
#       update_certification_level_select_customers GET        /customers/update_certification_level_select(.:format)                       customers#update_certification_level_select
#                                         customers GET        /customers(.:format)                                                         customers#index
#                                                   POST       /customers(.:format)                                                         customers#create
#                                      new_customer GET        /customers/new(.:format)                                                     customers#new
#                                     edit_customer GET        /customers/:id/edit(.:format)                                                customers#edit
#                                          customer GET        /customers/:id(.:format)                                                     customers#show
#                                                   PUT        /customers/:id(.:format)                                                     customers#update
#                                                   DELETE     /customers/:id(.:format)                                                     customers#destroy
#                                              note PUT        /notes/:id(.:format)                                                         notes#update
#                                                   DELETE     /notes/:id(.:format)                                                         notes#destroy
#                                        categories GET        /categories(.:format)                                                        categories#index
#                                                   POST       /categories(.:format)                                                        categories#create
#                                      new_category GET        /categories/new(.:format)                                                    categories#new
#                                     edit_category GET        /categories/:id/edit(.:format)                                               categories#edit
#                                          category GET        /categories/:id(.:format)                                                    categories#show
#                                                   PUT        /categories/:id(.:format)                                                    categories#update
#                                                   DELETE     /categories/:id(.:format)                                                    categories#destroy
#                                            brands GET        /brands(.:format)                                                            brands#index
#                                                   POST       /brands(.:format)                                                            brands#create
#                                         new_brand GET        /brands/new(.:format)                                                        brands#new
#                                        edit_brand GET        /brands/:id/edit(.:format)                                                   brands#edit
#                                             brand GET        /brands/:id(.:format)                                                        brands#show
#                                                   PUT        /brands/:id(.:format)                                                        brands#update
#                                                   DELETE     /brands/:id(.:format)                                                        brands#destroy
#                      create_extra_option_products POST       /products/create_extra_option(.:format)                                      products#create_extra_option
#                                   export_products POST       /products/export(.:format)                                                   products#export
#                           barcode_export_products POST       /products/barcode_export(.:format)                                           products#barcode_export
#                             print_barcode_product POST       /products/:id/print_barcode(.:format)                                        products#print_barcode
#                                  archived_product GET        /products/:id/archived(.:format)                                             products#archived
#                                unarchived_product GET        /products/:id/unarchived(.:format)                                           products#unarchived
#                                          products GET        /products(.:format)                                                          products#index
#                                                   POST       /products(.:format)                                                          products#create
#                                       new_product GET        /products/new(.:format)                                                      products#new
#                                      edit_product GET        /products/:id/edit(.:format)                                                 products#edit
#                                           product GET        /products/:id(.:format)                                                      products#show
#                                                   PUT        /products/:id(.:format)                                                      products#update
#                                                   DELETE     /products/:id(.:format)                                                      products#destroy
#                                     history_sales GET        /sales/history(.:format)                                                     sales#history
#                               event_tariffs_sales GET        /sales/event_tariffs(.:format)                                               sales#event_tariffs
#                               pay_for_event_sales POST       /sales/pay_for_event(.:format)                                               sales#pay_for_event
#                        update_extra_options_sales POST       /sales/update_extra_options(.:format)                                        sales#update_extra_options
#                      send_receipt_via_email_sales POST       /sales/send_receipt_via_email(.:format)                                      sales#send_receipt_via_email
#                                       close_sales GET        /sales/close(.:format)                                                       sales#close
#                               export_to_csv_sales POST       /sales/export_to_csv(.:format)                                               sales#export_to_csv
#                                   add_events_sale POST       /sales/:id/add_events(.:format)                                              sales#add_events
#                                 reopen_layby_sale POST       /sales/:id/reopen_layby(.:format)                                            sales#reopen_layby
#                                       refund_sale POST       /sales/:id/refund(.:format)                                                  sales#refund
#                             mark_as_complete_sale GET        /sales/:id/mark_as_complete(.:format)                                        sales#mark_as_complete
#                                  add_product_sale POST       /sales/:id/add_product(.:format)                                             sales#add_product
#                                 add_customer_sale POST       /sales/:id/add_customer(.:format)                                            sales#add_customer
#                                products_list_sale GET        /sales/:id/products_list(.:format)                                           sales#products_list
#                               customers_list_sale GET        /sales/:id/customers_list(.:format)                                          sales#customers_list
#                                        empty_sale DELETE     /sales/:id/empty(.:format)                                                   sales#empty
#                      show_email_receipt_form_sale GET        /sales/:id/show_email_receipt_form(.:format)                                 sales#show_email_receipt_form
#                            add_customer_form_sale GET        /sales/:id/add_customer_form(.:format)                                       sales#add_customer_form
#                             add_product_form_sale GET        /sales/:id/add_product_form(.:format)                                        sales#add_product_form
#                               search_product_sale GET        /sales/:id/search_product(.:format)                                          sales#search_product
#                                     add_note_sale POST       /sales/:id/add_note(.:format)                                                sales#add_note
#                             add_misc_product_sale POST       /sales/:id/add_misc_product(.:format)                                        sales#add_misc_product
#                                             sales GET        /sales(.:format)                                                             sales#index
#                                                   POST       /sales(.:format)                                                             sales#create
#                                          new_sale GET        /sales/new(.:format)                                                         sales#new
#                                         edit_sale GET        /sales/:id/edit(.:format)                                                    sales#edit
#                                              sale GET        /sales/:id(.:format)                                                         sales#show
#                                                   PUT        /sales/:id(.:format)                                                         sales#update
#                                                   DELETE     /sales/:id(.:format)                                                         sales#destroy
#                     suppliers_list_purchase_order GET        /purchase_orders/:id/suppliers_list(.:format)                                purchase_orders#suppliers_list
#                    assign_supplier_purchase_order POST       /purchase_orders/:id/assign_supplier(.:format)                               purchase_orders#assign_supplier
#                    remove_supplier_purchase_order POST       /purchase_orders/:id/remove_supplier(.:format)                               purchase_orders#remove_supplier
#                        add_product_purchase_order POST       /purchase_orders/:id/add_product(.:format)                                   purchase_orders#add_product
#                      products_list_purchase_order GET        /purchase_orders/:id/products_list(.:format)                                 purchase_orders#products_list
#                              empty_purchase_order POST       /purchase_orders/:id/empty(.:format)                                         purchase_orders#empty
#                           add_note_purchase_order POST       /purchase_orders/:id/add_note(.:format)                                      purchase_orders#add_note
#                           download_purchase_order GET        /purchase_orders/:id/download(.:format)                                      purchase_orders#download
#                         set_status_purchase_order POST       /purchase_orders/:id/set_status(.:format)                                    purchase_orders#set_status
#       update_order_form_after_send_purchase_order GET        /purchase_orders/:id/update_order_form_after_send(.:format)                  purchase_orders#update_order_form_after_send
#             send_email_to_supplier_purchase_order POST       /purchase_orders/:id/send_email_to_supplier(.:format)                        purchase_orders#send_email_to_supplier
#              set_expected_delivery_purchase_order PUT        /purchase_orders/:id/set_expected_delivery(.:format)                         purchase_orders#set_expected_delivery
#                       update_amend_purchase_order PUT        /purchase_orders/:id/update_amend(.:format)                                  purchase_orders#update_amend
#                                   purchase_orders GET        /purchase_orders(.:format)                                                   purchase_orders#index
#                                                   POST       /purchase_orders(.:format)                                                   purchase_orders#create
#                                new_purchase_order GET        /purchase_orders/new(.:format)                                               purchase_orders#new
#                               edit_purchase_order GET        /purchase_orders/:id/edit(.:format)                                          purchase_orders#edit
#                                    purchase_order GET        /purchase_orders/:id(.:format)                                               purchase_orders#show
#                                                   PUT        /purchase_orders/:id(.:format)                                               purchase_orders#update
#                                                   DELETE     /purchase_orders/:id(.:format)                                               purchase_orders#destroy
#                                           payment PUT        /payments/:id(.:format)                                                      payments#update
#                                                   DELETE     /payments/:id(.:format)                                                      payments#destroy
#                       ignore_events_sale_customer PUT        /sale_customers/:id/ignore_events(.:format)                                  sale_customers#ignore_events
#                                     sale_customer DELETE     /sale_customers/:id(.:format)                                                sale_customers#destroy
#                            business_contact_notes POST       /business_contacts/:business_contact_id/notes(.:format)                      notes#create
#                                    supplier_notes POST       /suppliers/:supplier_id/notes(.:format)                                      notes#create
#                        supplier_business_contacts POST       /suppliers/:supplier_id/contacts(.:format)                                   business_contacts#create
#                     new_supplier_business_contact GET        /suppliers/:supplier_id/contacts/new(.:format)                               business_contacts#new
#                    edit_supplier_business_contact GET        /suppliers/:supplier_id/contacts/:id/edit(.:format)                          business_contacts#edit
#                         supplier_business_contact GET        /suppliers/:supplier_id/contacts/:id(.:format)                               business_contacts#show
#                                                   PUT        /suppliers/:supplier_id/contacts/:id(.:format)                               business_contacts#update
#                                                   DELETE     /suppliers/:supplier_id/contacts/:id(.:format)                               business_contacts#destroy
#                     sync_with_mailchimp_suppliers GET        /suppliers/sync_with_mailchimp(.:format)                                     suppliers#sync_with_mailchimp
#                                  export_suppliers POST       /suppliers/export(.:format)                                                  suppliers#export
#                                         suppliers GET        /suppliers(.:format)                                                         suppliers#index
#                                                   POST       /suppliers(.:format)                                                         suppliers#create
#                                      new_supplier GET        /suppliers/new(.:format)                                                     suppliers#new
#                                     edit_supplier GET        /suppliers/:id/edit(.:format)                                                suppliers#edit
#                                          supplier GET        /suppliers/:id(.:format)                                                     suppliers#show
#                                                   PUT        /suppliers/:id(.:format)                                                     suppliers#update
#                                                   DELETE     /suppliers/:id(.:format)                                                     suppliers#destroy
#                             user_profile_settings GET        /settings/user_profile(.:format)                                             settings#user_profile
#                                   stores_settings GET        /settings/stores(.:format)                                                   settings#stores
#                                    sales_settings GET        /settings/sales(.:format)                                                    settings#sales
#                                   events_settings GET        /settings/events(.:format)                                                   settings#events
#                             integrations_settings GET        /settings/integrations(.:format)                                             settings#integrations
#                                  billing_settings GET        /settings/billing(.:format)                                                  settings#billing
#                            select_agency_settings GET        /settings/select_agency(.:format)                                            settings#select_agency
#                              edit_agency_settings GET        /settings/edit_agency(.:format)                                              settings#edit_agency
#                                    trips_settings GET        /settings/trips(.:format)                                                    settings#trips
#                              additionals_settings GET        /settings/additionals(.:format)                                              settings#additionals
#                    edit_mailchimp_step_1_settings GET        /settings/edit_mailchimp_step_1(.:format)                                    settings#edit_mailchimp_step_1
#                    edit_mailchimp_step_2_settings GET        /settings/edit_mailchimp_step_2(.:format)                                    settings#edit_mailchimp_step_2
#                                    print_settings GET        /settings/print(.:format)                                                    settings#print
#                     import_to_csv_step_1_settings GET        /settings/import_to_csv_step_1(.:format)                                     settings#import_to_csv_step_1
#                             switch_store_settings GET        /settings/switch_store(.:format)                                             settings#switch_store
#                                servicing_settings GET        /settings/servicing(.:format)                                                settings#servicing
#                                    boats_settings GET        /settings/boats(.:format)                                                    settings#boats
#                                   emails_settings GET        /settings/emails(.:format)                                                   settings#emails
#                            email_example_settings GET        /settings/email_example(.:format)                                            settings#email_example
#                          clear_data_page_settings GET        /settings/clear_data_page(.:format)                                          settings#clear_data_page
#                                  rentals_settings GET        /settings/rentals(.:format)                                                  settings#rentals
#                             restore_sale_settings GET        /settings/restore_sale(.:format)                                             settings#restore_sale
#                            update_stores_settings PUT        /settings/update_stores(.:format)                                            settings#update_stores
#                             update_store_settings PUT        /settings/update_store(.:format)                                             settings#update_store
#                            update_events_settings PUT        /settings/update_events(.:format)                                            settings#update_events
#                      update_integrations_settings PUT        /settings/update_integrations(.:format)                                      settings#update_integrations
#                           update_billing_settings PUT        /settings/update_billing(.:format)                                           settings#update_billing
#                            update_agency_settings PUT        /settings/update_agency(.:format)                                            settings#update_agency
#                              update_user_settings PUT        /settings/update_user(.:format)                                              settings#update_user
#                     import_to_csv_step_2_settings POST       /settings/import_to_csv_step_2(.:format)                                     settings#import_to_csv_step_2
#                                   import_settings POST       /settings/import(.:format)                                                   settings#import
#                               clear_data_settings POST       /settings/clear_data(.:format)                                               settings#clear_data
#                                          settings GET        /settings(.:format)                                                          settings#index
#                                      edit_setting GET        /settings/:id/edit(.:format)                                                 settings#edit
#                                           setting PUT        /settings/:id(.:format)                                                      settings#update
#                           edit_xero_settings_xero GET        /settings/xero/edit_xero(.:format)                                           settings/xero#edit_xero
#                     connect_to_xero_settings_xero GET        /settings/xero/connect_to_xero(.:format)                                     settings/xero#connect_to_xero
#                            callback_settings_xero GET        /settings/xero/callback(.:format)                                            settings/xero#callback
#                          disconnect_settings_xero GET        /settings/xero/disconnect(.:format)                                          settings/xero#disconnect
#                     update_settings_settings_xero PUT        /settings/xero/update_settings(.:format)                                     settings/xero#update_settings
#                check_xero_tax_rates_settings_xero POST       /settings/xero/check_xero_tax_rates(.:format)                                settings/xero#check_xero_tax_rates
#                                sync_settings_xero GET        /settings/xero/sync(.:format)                                                settings/xero#sync
#                                     settings_xero PUT        /settings/xero(.:format)                                                     settings/xero#update
#                        signup_settings_scubatribe POST       /settings/scubatribe/signup(.:format)                                        settings/scubatribes#signup
#                               settings_scubatribe POST       /settings/scubatribe(.:format)                                               settings/scubatribes#create
#                           new_settings_scubatribe GET        /settings/scubatribe/new(.:format)                                           settings/scubatribes#new
#                          stripe_callback_billings POST       /billings/stripe_callback(.:format)                                          billings#stripe_callback
#                        course_price_course_events GET        /events/courses/course_price(.:format)                                       course_events#course_price
#                   print_event_pickup_course_event GET        /events/courses/:id/print_event_pickup(.:format)                             events#print_event_pickup
#                 print_event_manifest_course_event GET        /events/courses/:id/print_event_manifest(.:format)                           events#print_event_manifest
#                                     course_events GET        /events/courses(.:format)                                                    course_events#index
#                                                   POST       /events/courses(.:format)                                                    course_events#create
#                                  new_course_event GET        /events/courses/new(.:format)                                                course_events#new
#                                 edit_course_event GET        /events/courses/:id/edit(.:format)                                           course_events#edit
#                                      course_event PUT        /events/courses/:id(.:format)                                                course_events#update
#                                                   DELETE     /events/courses/:id(.:format)                                                course_events#destroy
#                           trip_price_other_events GET        /events/standard/trip_price(.:format)                                        other_events#trip_price
#                    print_event_pickup_other_event GET        /events/standard/:id/print_event_pickup(.:format)                            events#print_event_pickup
#                  print_event_manifest_other_event GET        /events/standard/:id/print_event_manifest(.:format)                          events#print_event_manifest
#                             duplicate_other_event POST       /events/standard/:id/duplicate(.:format)                                     other_events#duplicate
#                                      other_events GET        /events/standard(.:format)                                                   other_events#index
#                                                   POST       /events/standard(.:format)                                                   other_events#create
#                                   new_other_event GET        /events/standard/new(.:format)                                               other_events#new
#                                  edit_other_event GET        /events/standard/:id/edit(.:format)                                          other_events#edit
#                                       other_event PUT        /events/standard/:id(.:format)                                               other_events#update
#                                                   DELETE     /events/standard/:id(.:format)                                               other_events#destroy
#                                 get_events_events GET        /events/get_events(.:format)                                                 events#get_events
#                          get_public_events_events GET        /events/get_public_events(.:format)                                          events#get_public_events
#                                       list_events GET        /events/list(.:format)                                                       events#list
#                                     widget_events GET        /events/widget(.:format)                                                     events#widget
#                                     search_events POST       /events/search(.:format)                                                     events#search
#                    print_resource_manifest_events POST       /events/print_resource_manifest(.:format)                                    events#print_resource_manifest
#                         print_staff_roster_events POST       /events/print_staff_roster(.:format)                                         events#print_staff_roster
#                 print_resource_utilisation_events POST       /events/print_resource_utilisation(.:format)                                 events#print_resource_utilisation
#                             check_free_sets_event GET        /events/:id/check_free_sets(.:format)                                        events#check_free_sets
#        cancel_confirmation_no_registrations_event GET        /events/:id/cancel_confirmation_no_registrations(.:format)                   events#cancel_confirmation_no_registrations
#                                      cancel_event POST       /events/:id/cancel(.:format)                                                 events#cancel
#      cancel_confirmation_with_registrations_event GET        /events/:id/cancel_confirmation_with_registrations(.:format)                 events#cancel_confirmation_with_registrations
#                             cancel_complete_event GET        /events/:id/cancel_complete(.:format)                                        events#cancel_complete
#                          print_event_pickup_event GET        /events/:id/print_event_pickup(.:format)                                     events#print_event_pickup
#                     print_resource_manifest_event GET        /events/:id/print_resource_manifest(.:format)                                events#print_resource_manifest
#                     event_user_participants_event GET        /events/:id/event_user_participants(.:format)                                events#event_user_participants
#          approve_event_event_customer_participant GET        /events/:event_id/event_customer_participants/:id/approve(.:format)          event_customer_participants#approve
#      reject_form_event_event_customer_participant GET        /events/:event_id/event_customer_participants/:id/reject_form(.:format)      event_customer_participants#reject_form
#           reject_event_event_customer_participant POST       /events/:event_id/event_customer_participants/:id/reject(.:format)           event_customer_participants#reject
# reject_paid_form_event_event_customer_participant GET        /events/:event_id/event_customer_participants/:id/reject_paid_form(.:format) event_customer_participants#reject_paid_form
#      reject_paid_event_event_customer_participant POST       /events/:event_id/event_customer_participants/:id/reject_paid(.:format)      event_customer_participants#reject_paid
#                 event_event_customer_participants GET        /events/:event_id/event_customer_participants(.:format)                      event_customer_participants#index
#                                                   POST       /events/:event_id/event_customer_participants(.:format)                      event_customer_participants#create
#              new_event_event_customer_participant GET        /events/:event_id/event_customer_participants/new(.:format)                  event_customer_participants#new
#             edit_event_event_customer_participant GET        /events/:event_id/event_customer_participants/:id/edit(.:format)             event_customer_participants#edit
#                  event_event_customer_participant GET        /events/:event_id/event_customer_participants/:id(.:format)                  event_customer_participants#show
#                                                   PUT        /events/:event_id/event_customer_participants/:id(.:format)                  event_customer_participants#update
#                                                   DELETE     /events/:event_id/event_customer_participants/:id(.:format)                  event_customer_participants#destroy
#                                            events GET        /events(.:format)                                                            events#index
#                                             event GET        /events/:id(.:format)                                                        events#show
#                                                   PUT        /events/:id(.:format)                                                        events#update
#       remove_from_sale_event_customer_participant DELETE     /event_customer_participants/:id/remove_from_sale(.:format)                  event_customer_participants#remove_from_sale
#       calculate_price_event_customer_participants POST       /event_customer_participants/calculate_price(.:format)                       event_customer_participants#calculate_price
#                 sync_with_mailchimp_staff_members GET        /staff_members/sync_with_mailchimp(.:format)                                 staff_members#sync_with_mailchimp
#                              export_staff_members POST       /staff_members/export(.:format)                                              staff_members#export
#                            schedule_staff_members GET        /staff_members/schedule(.:format)                                            staff_members#schedule
#                      mark_as_day_off_staff_member GET        /staff_members/:id/mark_as_day_off(.:format)                                 staff_members#mark_as_day_off
#                    mark_as_available_staff_member GET        /staff_members/:id/mark_as_available(.:format)                               staff_members#mark_as_available
#                                     staff_members GET        /staff_members(.:format)                                                     staff_members#index
#                                                   POST       /staff_members(.:format)                                                     staff_members#create
#                                  new_staff_member GET        /staff_members/new(.:format)                                                 staff_members#new
#                                 edit_staff_member GET        /staff_members/:id/edit(.:format)                                            staff_members#edit
#                                      staff_member GET        /staff_members/:id(.:format)                                                 staff_members#show
#                                                   PUT        /staff_members/:id(.:format)                                                 staff_members#update
#                                                   DELETE     /staff_members/:id(.:format)                                                 staff_members#destroy
#                                        user_notes POST       /users/:user_id/notes(.:format)                                              notes#create
#                                             users GET        /users(.:format)                                                             users#index
#                                                   POST       /users(.:format)                                                             users#create
#                                          new_user GET        /users/new(.:format)                                                         users#new
#                                         edit_user GET        /users/:id/edit(.:format)                                                    users#edit
#                                              user GET        /users/:id(.:format)                                                         users#show
#                                                   PUT        /users/:id(.:format)                                                         users#update
#                                                   DELETE     /users/:id(.:format)                                                         users#destroy
#                              sales_by_day_reports GET        /reports/sales_by_day(.:format)                                              reports#sales_by_day
#                            sales_by_month_reports GET        /reports/sales_by_month(.:format)                                            reports#sales_by_month
#                             sales_by_year_reports GET        /reports/sales_by_year(.:format)                                             reports#sales_by_year
#                            sales_by_staff_reports GET        /reports/sales_by_staff(.:format)                                            reports#sales_by_staff
#                            sales_by_brand_reports GET        /reports/sales_by_brand(.:format)                                            reports#sales_by_brand
#                         sales_by_category_reports GET        /reports/sales_by_category(.:format)                                         reports#sales_by_category
#                          sales_by_popular_reports GET        /reports/sales_by_popular(.:format)                                          reports#sales_by_popular
#                               event_sales_reports GET        /reports/event_sales(.:format)                                               reports#event_sales
#                         financial_reports_reports GET        /reports/financial_reports(.:format)                                         reports#financial_reports
#                       edit_finance_report_reports GET        /reports/edit_finance_report(.:format)                                       reports#edit_finance_report
#                     update_finance_report_reports PUT        /reports/update_finance_report(.:format)                                     reports#update_finance_report
#                                           reports GET        /reports(.:format)                                                           reports#index
#                                   step_1_bookings GET        /bookings/step_1(.:format)                                                   bookings#step_1
#                                   step_2_bookings POST       /bookings/step_2(.:format)                                                   bookings#step_2
#                          create_customer_bookings POST       /bookings/create_customer(.:format)                                          bookings#create_customer
#                          calculate_price_bookings POST       /bookings/calculate_price(.:format)                                          bookings#calculate_price
#                                   cancel_bookings GET        /bookings/cancel(.:format)                                                   bookings#cancel
#                          paypal_complete_bookings GET        /bookings/paypal_complete(.:format)                                          bookings#paypal_complete
#                              pause_gift_card_type GET        /gift_card_types/:id/pause(.:format)                                         gift_card_types#pause
#                             resume_gift_card_type GET        /gift_card_types/:id/resume(.:format)                                        gift_card_types#resume
#                                   gift_card_types GET        /gift_card_types(.:format)                                                   gift_card_types#index
#                                                   POST       /gift_card_types(.:format)                                                   gift_card_types#create
#                                new_gift_card_type GET        /gift_card_types/new(.:format)                                               gift_card_types#new
#                               edit_gift_card_type GET        /gift_card_types/:id/edit(.:format)                                          gift_card_types#edit
#                                    gift_card_type GET        /gift_card_types/:id(.:format)                                               gift_card_types#show
#                                                   PUT        /gift_card_types/:id(.:format)                                               gift_card_types#update
#                                                   DELETE     /gift_card_types/:id(.:format)                                               gift_card_types#destroy
#                                         gift_card GET        /gift_cards/:id(.:format)                                                    gift_cards#show
#                                                   PUT        /gift_cards/:id(.:format)                                                    gift_cards#update
#                                      credit_notes GET        /credit_notes(.:format)                                                      credit_notes#index
#                      get_type_of_service_services GET        /services/get_type_of_service(.:format)                                      services#get_type_of_service
#                                 add_item_services GET        /services/add_item(.:format)                                                 services#add_item
#                                  complete_service POST       /services/:id/complete(.:format)                                             services#complete
#                         edit_service_service_note GET        /services/:service_id/service_notes/:id/edit(.:format)                       service_notes#edit
#                              service_service_note PUT        /services/:service_id/service_notes/:id(.:format)                            service_notes#update
#                                                   DELETE     /services/:service_id/service_notes/:id(.:format)                            service_notes#destroy
#                       stop_service_time_intervals POST       /services/:service_id/time_intervals/stop(.:format)                          time_intervals#stop
#                            service_time_intervals POST       /services/:service_id/time_intervals(.:format)                               time_intervals#create
#                                          services GET        /services(.:format)                                                          services#index
#                                                   POST       /services(.:format)                                                          services#create
#                                       new_service GET        /services/new(.:format)                                                      services#new
#                                      edit_service GET        /services/:id/edit(.:format)                                                 services#edit
#                                           service GET        /services/:id(.:format)                                                      services#show
#                                                   PUT        /services/:id(.:format)                                                      services#update
#                                                   DELETE     /services/:id(.:format)                                                      services#destroy
#                               certification_level PUT        /certification_levels/:id(.:format)                                          certification_levels#update
#                                        event_trip PUT        /event_trips/:id(.:format)                                                   event_trips#update
#                                       stores_boat PUT        /stores/boats/:id(.:format)                                                  stores/boats#update
#                         add_rental_product_rental POST       /rentals/:id/add_rental_product(.:format)                                    rentals#add_rental_product
#                             remove_payment_rental DELETE     /rentals/:id/remove_payment(.:format)                                        rentals#remove_payment
#                     send_receipt_via_email_rental POST       /rentals/:id/send_receipt_via_email(.:format)                                rentals#send_receipt_via_email
#                                           rentals GET        /rentals(.:format)                                                           rentals#index
#                                                   POST       /rentals(.:format)                                                           rentals#create
#                                       edit_rental GET        /rentals/:id/edit(.:format)                                                  rentals#edit
#                                            rental GET        /rentals/:id(.:format)                                                       rentals#show
#                                                   PUT        /rentals/:id(.:format)                                                       rentals#update
#                                                   DELETE     /rentals/:id(.:format)                                                       rentals#destroy
#                            search_rental_products GET        /rental_products/search(.:format)                                            rental_products#search
#                            export_rental_products POST       /rental_products/export(.:format)                                            rental_products#export
#                           archived_rental_product GET        /rental_products/:id/archived(.:format)                                      rental_products#archived
#                         unarchived_rental_product GET        /rental_products/:id/unarchived(.:format)                                    rental_products#unarchived
#                                   rental_products GET        /rental_products(.:format)                                                   rental_products#index
#                                                   POST       /rental_products(.:format)                                                   rental_products#create
#                                new_rental_product GET        /rental_products/new(.:format)                                               rental_products#new
#                               edit_rental_product GET        /rental_products/:id/edit(.:format)                                          rental_products#edit
#                                    rental_product GET        /rental_products/:id(.:format)                                               rental_products#show
#                                                   PUT        /rental_products/:id(.:format)                                               rental_products#update
#                                                   DELETE     /rental_products/:id(.:format)                                               rental_products#destroy
#                             send_email_smart_list POST       /smart_lists/:id/send_email(.:format)                                        smart_lists#send_email
#                                 export_smart_list POST       /smart_lists/:id/export(.:format)                                            smart_lists#export
#                            get_values_smart_lists GET        /smart_lists/get_values(.:format)                                            smart_lists#get_values
#                                       smart_lists GET        /smart_lists(.:format)                                                       smart_lists#index
#                                                   POST       /smart_lists(.:format)                                                       smart_lists#create
#                                    new_smart_list GET        /smart_lists/new(.:format)                                                   smart_lists#new
#                                   edit_smart_list GET        /smart_lists/:id/edit(.:format)                                              smart_lists#edit
#                                        smart_list GET        /smart_lists/:id(.:format)                                                   smart_lists#show
#                                                   PUT        /smart_lists/:id(.:format)                                                   smart_lists#update
#                                                   DELETE     /smart_lists/:id(.:format)                                                   smart_lists#destroy
#                                           reviews GET        /reviews(.:format)                                                           reviews#index
#                                          requests GET        /requests(.:format)                                                          requests#index
#                                      api_v1_login POST       /api/v1/sessions(.:format)                                                   api/v1/sessions#create {:format=>"json"}
#                                  api_v1_companies POST       /api/v1/companies(.:format)                                                  api/v1/companies#create {:format=>"json"}
#                                 api_v1_currencies GET        /api/v1/currencies(.:format)                                                 api/v1/currencies#index {:format=>"json"}
#                                  api_v1_customers GET        /api/v1/customers(.:format)                                                  api/v1/customers#index {:format=>"json"}
#                                                   POST       /api/v1/customers(.:format)                                                  api/v1/customers#create {:format=>"json"}
#                                   api_v1_customer GET        /api/v1/customers/:id(.:format)                                              api/v1/customers#show {:format=>"json"}
#                                                   PUT        /api/v1/customers/:id(.:format)                                              api/v1/customers#update {:format=>"json"}
#                                                   DELETE     /api/v1/customers/:id(.:format)                                              api/v1/customers#destroy {:format=>"json"}
#              api_v1_event_event_user_participants POST       /api/v1/events/:event_id/event_user_participants(.:format)                   api/v1/event_user_participants#create {:format=>"json"}
#               api_v1_event_event_user_participant PUT        /api/v1/events/:event_id/event_user_participants/:id(.:format)               api/v1/event_user_participants#update {:format=>"json"}
#                                                   DELETE     /api/v1/events/:event_id/event_user_participants/:id(.:format)               api/v1/event_user_participants#destroy {:format=>"json"}
#          api_v1_event_event_customer_participants POST       /api/v1/events/:event_id/event_customer_participants(.:format)               api/v1/event_customer_participants#create {:format=>"json"}
#           api_v1_event_event_customer_participant PUT        /api/v1/events/:event_id/event_customer_participants/:id(.:format)           api/v1/event_customer_participants#update {:format=>"json"}
#                                                   DELETE     /api/v1/events/:event_id/event_customer_participants/:id(.:format)           api/v1/event_customer_participants#destroy {:format=>"json"}
#                                     api_v1_events GET        /api/v1/events(.:format)                                                     api/v1/events#index {:format=>"json"}
#                                                   POST       /api/v1/events(.:format)                                                     api/v1/events#create {:format=>"json"}
#                                      api_v1_event GET        /api/v1/events/:id(.:format)                                                 api/v1/events#show {:format=>"json"}
#                                                   PUT        /api/v1/events/:id(.:format)                                                 api/v1/events#update {:format=>"json"}
#                                                   DELETE     /api/v1/events/:id(.:format)                                                 api/v1/events#destroy {:format=>"json"}
#                                      api_v1_boats GET        /api/v1/boats(.:format)                                                      api/v1/boats#index {:format=>"json"}
#                                     api_v1_stores GET        /api/v1/stores(.:format)                                                     api/v1/stores#index {:format=>"json"}
#                                      api_v1_pages GET        /api/v1/pages(.:format)                                                      api/v1/pages#index {:format=>"json"}
#                                  api_v1_tax_rates GET        /api/v1/tax_rates(.:format)                                                  api/v1/tax_rates#index {:format=>"json"}
#                                 api_v1_categories GET        /api/v1/categories(.:format)                                                 api/v1/categories#index {:format=>"json"}
#                                   api_v1_category GET        /api/v1/categories/:id(.:format)                                             api/v1/categories#show {:format=>"json"}
#                                     api_v1_brands GET        /api/v1/brands(.:format)                                                     api/v1/brands#index {:format=>"json"}
#                                      api_v1_brand GET        /api/v1/brands/:id(.:format)                                                 api/v1/brands#show {:format=>"json"}
#                                api_v1_event_trips GET        /api/v1/event_trips(.:format)                                                api/v1/event_trips#index {:format=>"json"}
#                                 api_v1_event_trip GET        /api/v1/event_trips/:id(.:format)                                            api/v1/event_trips#show {:format=>"json"}
#                     api_v1_certification_agencies GET        /api/v1/certification_agencies(.:format)                                     api/v1/certification_agencies#index {:format=>"json"}
#                       api_v1_certification_agency GET        /api/v1/certification_agencies/:id(.:format)                                 api/v1/certification_agencies#show {:format=>"json"}
#                                 info_api_v1_users GET        /api/v1/users/info(.:format)                                                 api/v1/users#info {:format=>"json"}
#                                      api_v1_users GET        /api/v1/users(.:format)                                                      api/v1/users#index {:format=>"json"}
#                             products_api_v1_sales GET        /api/v1/sales/products(.:format)                                             api/v1/sales#products {:format=>"json"}
#                      remove_customer_api_v1_sales POST       /api/v1/sales/remove_customer(.:format)                                      api/v1/sales#remove_customer {:format=>"json"}
#                          add_customer_api_v1_sale POST       /api/v1/sales/:id/add_customer(.:format)                                     api/v1/sales#add_customer {:format=>"json"}
#                           add_product_api_v1_sale POST       /api/v1/sales/:id/add_product(.:format)                                      api/v1/sales#add_product {:format=>"json"}
#                          send_receipt_api_v1_sale POST       /api/v1/sales/:id/send_receipt(.:format)                                     api/v1/sales#send_receipt {:format=>"json"}
#                      add_misc_product_api_v1_sale POST       /api/v1/sales/:id/add_misc_product(.:format)                                 api/v1/sales#add_misc_product {:format=>"json"}
#                                      api_v1_sales GET        /api/v1/sales(.:format)                                                      api/v1/sales#index {:format=>"json"}
#                                   new_api_v1_sale GET        /api/v1/sales/new(.:format)                                                  api/v1/sales#new {:format=>"json"}
#                                       api_v1_sale GET        /api/v1/sales/:id(.:format)                                                  api/v1/sales#show {:format=>"json"}
#                     sales_by_brand_api_v1_reports GET        /api/v1/reports/sales_by_brand(.:format)                                     api/v1/reports#sales_by_brand {:format=>"json"}
#                  sales_by_category_api_v1_reports GET        /api/v1/reports/sales_by_category(.:format)                                  api/v1/reports#sales_by_category {:format=>"json"}
#                       sales_by_day_api_v1_reports GET        /api/v1/reports/sales_by_day(.:format)                                       api/v1/reports#sales_by_day {:format=>"json"}
#                  sales_by_products_api_v1_reports GET        /api/v1/reports/sales_by_products(.:format)                                  api/v1/reports#sales_by_products {:format=>"json"}
#              sales_by_staff_member_api_v1_reports GET        /api/v1/reports/sales_by_staff_member(.:format)                              api/v1/reports#sales_by_staff_member {:format=>"json"}
#                  financial_reports_api_v1_reports GET        /api/v1/reports/financial_reports(.:format)                                  api/v1/reports#financial_reports {:format=>"json"}
#                                                   GET        /api/v1/reports/financial_reports/:id(.:format)                              api/v1/reports#financial_report_details {:format=>"json"}
#                                                   PUT        /api/v1/reports/financial_reports/:id(.:format)                              api/v1/reports#update_finance_report {:format=>"json"}
#                                   api_v1_products GET        /api/v1/products(.:format)                                                   api/v1/products#index {:format=>"json"}
#                                                   POST       /api/v1/products(.:format)                                                   api/v1/products#create {:format=>"json"}
#                                    api_v1_product GET        /api/v1/products/:id(.:format)                                               api/v1/products#show {:format=>"json"}
#                                                   PUT        /api/v1/products/:id(.:format)                                               api/v1/products#update {:format=>"json"}
#                                                   DELETE     /api/v1/products/:id(.:format)                                               api/v1/products#destroy {:format=>"json"}
#                        change_current_store_pages GET        /pages/change_current_store(.:format)                                        pages#change_current_store
#                                delete_image_pages GET        /pages/delete_image(.:format)                                                pages#delete_image
#                                   no_access_pages GET        /pages/no_access(.:format)                                                   pages#no_access
#                                      search_pages GET        /pages/search(.:format)                                                      pages#search
#                              complete_setup_pages GET        /pages/complete_setup(.:format)                                              pages#complete_setup
#                                send_message_pages POST       /pages/send_message(.:format)                                                pages#send_message
#                        send_support_request_pages POST       /pages/send_support_request(.:format)                                        pages#send_support_request
#                                               erd            /erd                                                                         Erd::Engine
# 
# Routes for Erd::Engine:
#         GET /                  erd/erd#index
#         PUT /                  erd/erd#update
# migrate PUT /migrate(.:format) erd/erd#migrate
#    root     /                  erd/erd#index
# 

DchqCore::Application.routes.draw do

  apipie

  root to: 'pages#index'

  ActiveAdmin.routes(self)
  devise_for :admin_users, ActiveAdmin::Devise.config

# Custom routes by Dev -------------------------------------------

post 'events/save_event_description', to: 'events#save_event_description', as: 'save_event'
post 'events/update_event_description', to: 'events#update_event_description', as: 'update_event'

#End of  Custom routes by Dev -------------------------------------------

  resources :admin, only: [] do
    collection do
      get :become
    end
  end

  devise_for :users, controllers: { sessions: "sessions", registrations: "registrations", passwords: "passwords" }
  devise_scope :users do
    match 'sign_out' => 'sessions#destroy', via: :get
  end

  resources :stores, only: :update do
    get :set_current, on: :member
    collection do
      get :close
      post :cash_put_out
      get :reopen
    end
  end

  ################################# CUSTOMERS ################################
  resources :customers do
    resources :incidents, only: [:create, :update, :destroy]
    resources :notes, only: [:create]

    collection do
      get :sync_with_mailchimp
      post :export
      post :export_to_qif
      get :mobile_menu
      post :search
      post :update_certification_level_membership
      post :check_certificate
    end

    member do
      get :get_credit_note
      post :add_to_event
      get :check_certification_levels
      get :get_discount_level
      get :recalculate_event_price
      post :get_events
      post :load_sales
      post :load_ecp
    end

    get :update_certification_level_select, on: :collection
  end

  # FIXME: use polymorphic route
  resources :notes, only: [:update, :destroy]

  resources :categories
  resources :brands

  ################################# PRODUCTS ################################
  resources :products do
    collection do
      post :create_extra_option
      post :export
      post :barcode_export
    end
    member do
      post :print_barcode
      get :archived
      get :unarchived
    end
  end

  ################################# SALES ################################
  resources :sales do
    get :history, on: :collection
    get :event_tariffs, on: :collection
    post :pay_for_event, on: :collection
    post :update_extra_options, on: :collection

    collection do
      post :send_receipt_via_email
      get :close
      post :export_to_csv
    end

    member do
      post :add_events
      post :reopen_layby
      post :refund
      get :mark_as_complete
      post :add_product
      post :add_customer
      get  :products_list
      get  :customers_list
      delete :empty
      get :show_email_receipt_form
      get :add_customer_form
      get :add_product_form
      get :search_product
      post :add_note
      post :add_misc_product
    end
  end
  resources :purchase_orders do
    member do
      get :suppliers_list
      post :assign_supplier
      post :remove_supplier
      post :add_product
      get :products_list
      post :empty
      post :add_note
      get :download
      post :set_status
      get :update_order_form_after_send
      post :send_email_to_supplier
      put :set_expected_delivery
      put :update_amend
    end
  end
  resources :payments, only: [:update, :destroy]
  resources :sale_customers, only: [:destroy] do
    put :ignore_events, on: :member
  end

  resources :business_contacts, only: [] do
    resources :notes, only: [:create]
  end

  resources :suppliers do
    resources :notes, only: [:create]
    resources :business_contacts, except: [:index], :path => "/contacts"
    collection do
      get :sync_with_mailchimp
      post :export
    end
  end

  resources :settings, only: [:index, :edit, :update] do
    collection do
      [:user_profile, :stores, :sales, :events, :integrations, :billing, :select_agency, :edit_agency, :trips, :additionals, :edit_mailchimp_step_1,
       :edit_mailchimp_step_2, :print, :import_to_csv_step_1, :switch_store, :servicing, :boats, :emails, :email_example, :clear_data_page,
       :rentals, :restore_sale].each do |route|
        get route
      end
      [:update_stores, :update_store, :update_events, :update_integrations, :update_billing, :update_agency, :update_user].each do |route|
        put route
      end
      [:import_to_csv_step_2, :import, :clear_data].each do |route|
        post route
      end
    end
  end

  namespace :settings do
    resource :xero, only: [:update], controller: "xero" do
      collection do
        get :edit_xero
        get :connect_to_xero
        get :callback
        get :disconnect
        put :update_settings
        post :check_xero_tax_rates
        get :sync
      end
    end
    resource :scubatribe, only: [:create, :new] do
      collection do
        post :signup
      end
    end
  end

  resources :billings, only: [] do
    collection do
      post :stripe_callback
    end
  end

  resources :course_events, except: [:show], :path => "/events/courses" do
    collection do
      get :course_price
    end
    member do
      get :print_event_pickup,    to: 'events#print_event_pickup'
      get :print_event_manifest,  to: 'events#print_event_manifest'
    end
  end
  resources :other_events, except: [:show], :path => "/events/standard" do
    collection do
      get :trip_price
    end
    member do
      get :print_event_pickup,    to: 'events#print_event_pickup'
      get :print_event_manifest,  to: 'events#print_event_manifest'
      post :duplicate
    end
  end

  resources :events, only: [:index, :show, :update] do
    collection do
      get :get_events
      get :get_public_events
      get :list
      get :get_calendar_events
      get :widget
      post :search
      post :print_resource_manifest
      post :print_staff_roster
      post :print_resource_utilisation
      get :staff_calender
    end
    member do
      get :check_free_sets
      get :cancel_confirmation_no_registrations
      post :cancel
      get :cancel_confirmation_with_registrations
      get :cancel_complete
      get :print_event_pickup
      get :print_resource_manifest
      get :event_user_participants
    end
    resources :event_customer_participants do
      member do
        get :approve
        get :reject_form
        post :reject
        get :reject_paid_form
        post :reject_paid
      end
    end
  end
  resources :event_customer_participants, only: [] do
    delete :remove_from_sale, on: :member
    post :calculate_price, on: :collection
  end

  resources :staff_members do
    collection do
      get :sync_with_mailchimp
      post :export
      get :schedule
    end
    member do
      get :mark_as_day_off
      get :mark_as_available
    end
  end

  resources :users do
    resources :notes, only: [:create]
  end

  ############################################ REPORTS ##############################################
  resources :reports, only: [:index] do
    collection do
      get :sales_by_day
      get :sales_by_month
      get :sales_by_year
      get :sales_by_staff
      get :sales_by_brand
      get :sales_by_category
      get :sales_by_popular
      get :event_sales
      get :financial_reports
      get :edit_finance_report
      put :update_finance_report
    end
  end

  ############################################ BOOKING ##############################################
  resources :bookings, only: [] do
    collection do
      get :step_1
      post :step_2
      post :create_customer
      post :calculate_price
      get :cancel
      get :paypal_complete
    end
  end

  ################################# CUSTOMERS ################################
  resources :gift_card_types do
    member do
      get :pause
      get :resume
    end
  end

  resources :gift_cards, only: [:show, :update]

  resources :credit_notes, only: [:index]
  resources :services do
    collection do
      get :get_type_of_service
      get :add_item
    end
    member do
      post :complete
    end
    resources :service_notes, only: [:edit, :update, :destroy]
    resources :time_intervals, only: [:create] do
      collection do
        post :stop
      end
    end
  end

  resources :certification_levels, only: [:update]
  resources :event_trips, only: [:update]

  namespace :stores do
    resources :boats, only: [:update]
  end

  #RENTAL MODULE
  resources :rentals, except: [:new] do
    member do
      post :add_rental_product
      delete :remove_payment
      post :send_receipt_via_email
    end
  end

  ############################################ RENTAL PRODUCTS ##################################
  resources :rental_products do
    collection do
      get :search
      post :export
    end

    member do
      get :archived
      get :unarchived
    end
  end

  ############################################ SMART LISTS ##################################
  resources :smart_lists do
    member do
      post :send_email
      post :export
    end
    collection do
      get :get_values
    end
  end

  ############################################ REVIEWS / ScubaTribe #############################
  resources :reviews, only: [:index]
  resources :requests, only: [:index]

  ############################################ API ##############################################
  namespace :api, defaults: { format: 'json' } do
    namespace :v1 do
      devise_scope :user do
        post 'sessions' => 'sessions#create', :as => 'login'
      end
      resources :companies, only: [:create]
      resources :currencies, only: [:index]
      resources :customers, only: [:index, :show, :create, :update, :destroy]
      resources :events, only: [:index, :show, :create, :update, :destroy] do
        resources :event_user_participants, only: [:update, :create, :destroy]
        resources :event_customer_participants, only: [:update, :create, :destroy]
      end
      [:boats, :stores, :pages, :tax_rates].each do |res|
        resources res, only: [:index]
      end
      resources :categories, only: [:index, :show]
      resources :brands, only: [:index, :show]
      resources :event_trips, only: [:index, :show]
      resources :certification_agencies, only: [:index, :show]
      resources :users, only: [:index] do
        get :info, on: :collection
      end
      resources :sales, only: [:index, :show, :new] do
        collection do
          get :products
          post :remove_customer
        end
        member do
          post :add_customer
          post :add_product
          post :send_receipt
          post :add_misc_product
        end
      end
      resources :reports, only: [] do
        collection do
          [:sales_by_brand, :sales_by_category, :sales_by_day, :sales_by_products, :sales_by_staff_member,
           :financial_reports].each do |route|
            get route
          end
          match '/financial_reports/:id' => 'reports#financial_report_details', via: :get
          match '/financial_reports/:id' => 'reports#update_finance_report', via: :put
        end
      end
      resources :products, except: [:new, :edit]
    end
  end

  resources :pages, only: [] do
    collection do
      %w(change_current_store delete_image no_access search complete_setup).each do |route|
        get route.to_sym
      end
      %w[send_message send_support_request].each do |route|
        post route.to_sym
      end
    end
  end
end

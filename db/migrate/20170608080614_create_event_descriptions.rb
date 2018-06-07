class CreateEventDescriptions < ActiveRecord::Migration
  def change
    create_table :event_descriptions do |t|
      t.text :description

      t.timestamps
    end
  end
end

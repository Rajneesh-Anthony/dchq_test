class AddEventDescriptionIdToEvents < ActiveRecord::Migration
  def change
    add_column :events, :event_description_id, :integer
  end
end

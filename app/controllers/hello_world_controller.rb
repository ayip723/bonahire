# frozen_string_literal: true

class HelloWorldController < ApplicationController
  layout "hello_world"

  def index
    # @hello_world_props = { name: "Stranger" }
    if current_user
      @hello_world_props = { companies: {name: 'Stranger', companies: {}}, session: { id: current_user.id } }
    else
      @hello_world_props = { companies: {name: 'Stranger', companies: {}} }
    end
  end
end

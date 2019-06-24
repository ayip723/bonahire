# frozen_string_literal: true

class HelloWorldController < ApplicationController
  layout "hello_world"

  def index
    # @hello_world_props = { name: "Stranger" }
    @hello_world_props = { companies: {name: 'Stranger', companies: {}}, currentUser: current_user }
  end
end

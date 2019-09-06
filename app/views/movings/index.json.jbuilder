json.movings do
  @movings.each do |moving|
    json.set! moving.id do
      json.partial! 'moving', moving: moving
    end
  end
end

# coding: utf-8

require 'delegate'

# Understands how to present a random, happy emoji
class RandomHappyEmoji < SimpleDelegator
  HAPPY_EMOJI = [":)", ":D"]

  def initialize
    super(HAPPY_EMOJI.sample)
          # srand(67810) - returns :D
          # srand(67809) - returns :)
  end
end

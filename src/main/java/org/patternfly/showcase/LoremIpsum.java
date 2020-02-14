package org.patternfly.showcase;

import java.util.Random;

@SuppressWarnings("SpellCheckingInspection")
public final class LoremIpsum {

    private static final String[] PARAGRAPHS = {
            "Aliquam aliquet blandit erat nec hendrerit.",
            "At vero eos et accusam et justo duo dolores et ea rebum.",
            "Atque ab isto capite fluere necesse est omnem rationem bonorum et malorum.",
            "Cras bibendum nisi quis turpis aliquet tempus.",
            "Duis tempor maximus nulla at varius.",
            "Duis volutpat rhoncus massa, quis convallis nisl.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Nam velit diam, condimentum dapibus lobortis vitae, suscipit sodales eros.",
            "Nulla a tortor posuere, tempor turpis non, lacinia velit.",
            "Nulla pellentesque quam ut faucibus faucibus.",
            "Sed ac fringilla eros.",
            "Ut ut volutpat nisi.",
            "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
            "Vivamus tempus lacus ac semper luctus.",
            "Vivamus varius nisl in sapien sagittis, vel condimentum lectus rutrum.",
    };

    private static final String[] WORDS = "lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua at vero eos et accusam et justo duo dolores et ea rebum stet clita kasd gubergren no sea takimata sanctus est lorem ipsum dolor sit amet lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua at vero eos et accusam et justo duo dolores et ea rebum stet clita kasd gubergren no sea takimata sanctus est lorem ipsum dolor sit amet"
            .split("\\s");

    private LoremIpsum() {
    }

    public static String word() {
        return cycle(1, WORDS);
    }

    public static String words() {
        return cycle(10, WORDS);
    }

    public static String words(int amount) {
        return cycle(amount, WORDS);
    }

    public static String paragraph() {
        return PARAGRAPHS[new Random().nextInt(PARAGRAPHS.length)];
    }

    public static String paragraphs(int amount) {
        return cycle(amount, PARAGRAPHS);
    }

    private static String cycle(int amount, String[] source) {
        StringBuilder builder = new StringBuilder();
        int index = new Random().nextInt(source.length);
        for (int i = 0; i < amount; ++i) {
            if (index == source.length) {
                index = 0;
            }
            builder.append(source[index]);
            if (i < amount - 1) {
                builder.append(' ');
            }
            index++;
        }
        return builder.toString();
    }
}

export class ScottState {
    value = $state(0)

    up() {
        this.value++
    }

}

export function createState() {
    let value = $state(0)

    function up() {
        value++
    }

    return {
        get value() {
            return value
        },

        set value(newValue) {
            if (isNaN(newValue)) return

            value = Number(newValue)
        },

        up
    }
}
